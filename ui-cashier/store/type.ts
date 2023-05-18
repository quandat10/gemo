export interface Product {
    id?: number
    name?: string
    img?: string
    type?: string
}

export interface ItemOrder {
    type?: string
    size?: string
    isScreem?: boolean
    chocolate?: number
    isMilk?: boolean
    toping?: string
    count?: number
}

export enum ProductType {
    DRINK = 'drink',
    FOOD = 'food'
}

export enum DrinkType {
    COLD = 'Cold',
    HOT = 'Hot',
    BLENDED = 'Blended'
}

export enum DrinkSize {
    S = 'S',
    M = 'M',
    L = 'L',
    XL = 'XL',
}