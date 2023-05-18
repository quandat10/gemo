enum SizeEnum {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL'
}

enum DrinkEnum {
  COLD = 'cold',
  HOT = 'hot',
  BLENDED = 'blended',
  MILK_TEA = 'milk tea'
}

interface Drink {
  drink_type: DrinkEnum
  size: SizeEnum
  whipped_cream: boolean
  milk_type?: string
  chocolate_sauce_pumps?: number
}

interface Food {
  item_type: string
  option1?: string
  option2?: string
}

interface ItemPriceBreakdown {
  base_price: number
  item_price: number
  chocolate_sauce_price?: number
}

function calculatePrice1(drink: Drink): number {
  const basePrices = {
    hot: { S: 2, M: 2.5 },
    cold: { S: 2, M: 2.5, L: 3.5 },
    blended: { S: 3, M: 3.5, L: 4.5 },
  }

  let price = 0

  const { drink_type, size, whipped_cream } = drink

  if (size === SizeEnum.S || size === SizeEnum.M || size === SizeEnum.L) {
    price = basePrices[drink_type][size]
  } else {
    return 0
  }

  if (whipped_cream) {
    price += 0.5
  }
  return price
}

function calculatePrice2(drink: Drink): number {
  const basePrices = {
    hot: { S: 2, M: 2.5, L: 3, XL: 4.5 },
    cold: { S: 2, M: 2.5, L: 3.5, XL: 5 },
    blended: { S: 3, M: 3.5, L: 4.5, XL: 6 },
    'milk tea': { S: 2.25, M: 2.75, L: 3.25, XL: 4.75 },
  }
  let price = 0
  const { drink_type, size, whipped_cream, milk_type } = drink

  if (size !== SizeEnum.S && size !== SizeEnum.M && size !== SizeEnum.L && size !== SizeEnum.XL) {
    return 0
  }

  price = basePrices[drink_type][size]

  if (whipped_cream) {
    price += 0.5
  }

  if (milk_type === 'almond') {
    price += 0.5
  }
  return price
}

function calculatePrice3(drink: Drink): ItemPriceBreakdown {
  const basePrices = {
    hot: { S: 2, M: 2.5, L: 3 },
  }
  let item_price = 0
  let chocolate_sauce_price = 0
  const { drink_type, size, whipped_cream, chocolate_sauce_pumps } = drink
  if (size === SizeEnum.S || size === SizeEnum.M || size === SizeEnum.L) {
    item_price = basePrices[drink_type][size]
  }
  if (whipped_cream) {
    item_price += 0.5
  }
  if (chocolate_sauce_pumps && drink_type === 'hot') {
    if (chocolate_sauce_pumps > 2) {
      chocolate_sauce_price = (chocolate_sauce_pumps - 2) * 0.5
      if (chocolate_sauce_pumps > 6) {
        chocolate_sauce_price = 2.5
      }
    }
  }
  return { base_price: basePrices[drink_type][SizeEnum.S], item_price, chocolate_sauce_price }
}

function calculatePrice4(food: Food): number {
  const basePrices = {
    sandwich: 3,
    bagel: 3,
  }
  let price = basePrices[food.item_type]
  if (food.option1 === 'egg' || food.option1 === 'turkey') {
    price += 1
  }
  if (food.option2 === 'butter' || food.option2 === 'cream cheese') {
    price += 0.5
  }
  return price
}

function calculatePrice5(items: (Drink | Food)[]): { item: string; price: number }[] {
  let subtotal = 0
  const breakdown: { item: string; price: number }[] = []
  for (let i = 0;i < items.length;i++) {
    if ('drink_type' in items[i]) {
      const drink: Drink = items[i] as Drink
      const drink_price = calculatePrice2(drink)
      subtotal += drink_price
      breakdown.push({ item: `${drink.size} ${drink.drink_type} ${drink.whipped_cream ? 'with' : 'without'} whipped cream`, price: drink_price })
    } else if ('item_type' in items[i]) {
      const food: Food = items[i] as Food
      const food_price = calculatePrice4(food)
      subtotal += food_price
      breakdown.push({ item: `${food.option1 ? food.option1 + ' ' : ''}${food.item_type}${food.option2 ? ' with ' + food.option2 : ''}`, price: food_price })
    }
  }
  const tax = subtotal * 0.0725
  const total = subtotal + tax
  breakdown.push({ item: 'Tax', price: tax })
  breakdown.push({ item: 'Total', price: total })
  return breakdown
}
