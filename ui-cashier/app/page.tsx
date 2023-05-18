'use client'

import {
  FunctionComponent,
  useState,
} from 'react'

import Image from 'next/image'
import tw from 'twin.macro'

import { Modal } from '@/components/modal'
import { Store } from '@/store/store'
import {
  DrinkSize,
  DrinkType,
  Product,
  ProductType,
} from '@/store/type'
import {
  MinusCircleIcon,
  PlusCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const Coffee: Product = {
  id: 1,
  name: 'Coffee',
  img: '/coffee.jpg',
  type: ProductType.DRINK
}

const MilkTea: Product = {
  id: 2,
  name: 'Milk Tea',
  img: '/milk-tea.jpg',
  type: ProductType.DRINK
}

const Sandwich: Product = {
  id: 3,
  name: 'Sandwich',
  img: '/sandwich.jpg',
  type: ProductType.FOOD
}

const Bagel: Product = {
  id: 4,
  name: 'Bagel',
  img: '/bagel.jpg',
  type: ProductType.FOOD
}

const Main = tw.div`
bg-black flex h-screen w-screen flex-row gap-3 items-start justify-center py-6
`

const LeftSide = tw.div`
w-48 bg-white h-full rounded-3xl flex flex-col items-center justify-center gap-4 p-4
`

const LargeText = tw.span`
text-2xl font-black text-black
`

const NormalText = tw.span`
text-black font-bold text-lg
`

const ProductNameText = tw.span`
text-lg font-semibold text-black
`

const RightSide = tw.div`
w-1/4 bg-white h-full rounded-3xl py-6 divide-y divide-gray-800 gap-4
`

const TitleRightSide = tw.div`
w-full flex justify-center items-center text-2xl font-black text-black pb-3
`

const ItemBox = tw.div`
hover:bg-gray-100 w-full flex flex-col items-center justify-center p-2 border border-solid border-gray-300 rounded-xl cursor-pointer gap-4
`

const ModalContent = tw.div`
flex flex-col justify-start divide-y divide-gray-300 w-full h-full gap-3
`

const ModalHeader = tw.div`
flex flex-row justify-end items-center p-3 w-full
`

const ModalBox = tw.div`
flex flex-col w-full justify-start items-start py-6 gap-4
`

const Session = tw.div`
flex flex-col border border-solid border-gray-300 p-4 rounded-lg w-full justify-center items-start gap-3
`

const Box = tw.div`
cursor-pointer hover:bg-gray-500 hover:text-white border border-solid border-gray-300 px-6 py-3 rounded-lg

`

const Item: FunctionComponent<{ product: Product, setOpen: (val: boolean) => void }> = ({ product, setOpen }) => {

  // action
  const setProductActive = Store.useStoreActions(action => action.setProductActive)

  return (
    <ItemBox onClick={() => {
      setOpen(true)
      setProductActive(product)
    }} >
      <Image width={80} height={110} className="w-28 h-24 rounded-lg" src={product.img!} alt={product.name!} />
      <ProductNameText>{product.name}</ProductNameText>
    </ItemBox>
  )
}


const DrinkOrder: FunctionComponent = () => {
  const [count, setCount] = useState<number>(1)
  const [type, setType] = useState<string>(DrinkType.COLD)
  const [size, setSize] = useState<string>(DrinkSize.S)

  return (
    <ModalBox>
      <Session>
        <NormalText>{'Type'}</NormalText>
        <div className='flex flex-row gap-3'>
          <Box onClick={() => setType(DrinkType.COLD)} className={`${type === DrinkType.COLD ? 'bg-black text-white' : 'bg-white text-black'} `}>
            {DrinkType.COLD}
          </Box>
          <Box onClick={() => setType(DrinkType.HOT)} className={`${type === DrinkType.HOT ? 'bg-black text-white' : 'bg-white text-black'} `}>
            {DrinkType.HOT}
          </Box>
          <Box onClick={() => setType(DrinkType.BLENDED)} className={`${type === DrinkType.BLENDED ? 'bg-black text-white' : 'bg-white text-black'} `}>
            {DrinkType.BLENDED}
          </Box>
        </div>
      </Session>
      <Session>
        <NormalText>{'Type'}</NormalText>
        <div className='flex flex-row gap-3'>
          <Box onClick={() => setSize(DrinkSize.S)} className={`${size === DrinkSize.S ? 'bg-black text-white' : 'bg-white text-black'} `}>
            {DrinkSize.S}
          </Box>
          <Box onClick={() => setSize(DrinkSize.M)} className={`${size === DrinkSize.M ? 'bg-black text-white' : 'bg-white text-black'} `}>
            {DrinkSize.M}
          </Box>
          <Box onClick={() => setSize(DrinkSize.L)} className={`${size === DrinkSize.L ? 'bg-black text-white' : 'bg-white text-black'} `}>
            {DrinkSize.L}
          </Box>
          <Box onClick={() => setSize(DrinkSize.XL)} className={`${size === DrinkSize.XL ? 'bg-black text-white' : 'bg-white text-black'} `}>
            {DrinkSize.XL}
          </Box>
        </div>
      </Session>
      <Session>
        <NormalText>{'Count'}</NormalText>
        <div className='flex flex-row gap-4 justify-start items-center'>
          <MinusCircleIcon onClick={() => setCount(count - 1)} className='select-none w-7 h-7 cursor-pointer' />
          <input type='number' value={count} onChange={e => setCount(parseInt(e.target.value))} min={1} className='content-center w-32 border border-solid border-gray-200 py-2 px-3 outline-0 rounded-lg' />
          <PlusCircleIcon onClick={() => setCount(count + 1)} className='select-none w-7 h-7 cursor-pointer' />
        </div>
      </Session>
    </ModalBox>
  )
}

const FoodOrder: FunctionComponent = () => {
  const [count, setCount] = useState<number>(1)
  return (
    <ModalBox>
      <Session>
        <NormalText>{'Toping'}</NormalText>
        <div className='flex flex-row gap-3'>
          <div className=''>
            {'No'}
          </div>
          <div className=''>
            {'Egg'}
          </div>
          <div className=''>
            {'Turkey'}
          </div>
        </div>
      </Session>
      <Session>
        <NormalText>{'Count'}</NormalText>
        <div className='flex flex-row gap-4 justify-start items-center'>
          <MinusCircleIcon onClick={() => setCount(count - 1)} className='select-none w-7 h-7 cursor-pointer' />
          <input type='number' value={count} onChange={e => setCount(parseInt(e.target.value))} min={1} className='content-center w-32 border border-solid border-gray-200 py-2 px-3 outline-0 rounded-lg' />
          <PlusCircleIcon onClick={() => setCount(count + 1)} className='select-none w-7 h-7 cursor-pointer' />
        </div>
      </Session>
    </ModalBox>
  )
}


const ModalSession: FunctionComponent<{ isOpen: boolean, setOpen: (e: boolean) => void }> = ({ isOpen, setOpen }) => {
  // data
  const productActive = Store.useStoreState(state => state.productActive)

  return (
    <Modal isOpen={isOpen} >
      <ModalContent>
        <ModalHeader>
          <div className='w-full text-black font-black text-2xl flex flex-row justify-center items-center gap-3'>
            <Image width={80} height={110} className="w-12 h-12 rounded-full" src={productActive.img!} alt={productActive.name!} />
            {productActive.name}
          </div>
          <XMarkIcon onClick={() => setOpen(false)} className='w-7 h-7 cursor-pointer' />
        </ModalHeader>
        {productActive.type === ProductType.DRINK && <DrinkOrder />}
        {productActive.type === ProductType.FOOD && <FoodOrder />}

      </ModalContent>

    </Modal>
  )
}

const Body: FunctionComponent = () => {
  // hook
  const [isOpen, setOpen] = useState<boolean>(false)

  // data


  return (
    <Main>
      <LeftSide>
        <LargeText>{'Menu'}</LargeText>
        <Item setOpen={setOpen} product={Coffee} />
        <Item setOpen={setOpen} product={MilkTea} />
        <Item setOpen={setOpen} product={Sandwich} />
        <Item setOpen={setOpen} product={Bagel} />
      </LeftSide>
      <RightSide>
        <TitleRightSide>
          {'Bill Order'}
        </TitleRightSide>
        <div className='w-full h-full pt-3 px-3'>
          hello
        </div>
      </RightSide>
      <ModalSession isOpen={isOpen} setOpen={setOpen} />
    </Main>
  )
}

export default function Home() {



  return (
    <Store.Provider>
      <Body />
    </Store.Provider>
  )
}
