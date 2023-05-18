'use client'

import {
  Fragment,
  FunctionComponent,
  ReactNode,
} from 'react'

import {
  Dialog,
  Transition,
} from '@headlessui/react'

export const Modal: FunctionComponent<{
  isOpen: boolean
  children: ReactNode
}> = ({ isOpen, children }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-30' onClose={() => { }}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm' />
        </Transition.Child>
        <div className='  fixed inset-0 overflow-y-auto'>
          <div className='flex h-full items-center justify-center text-center py-6'>
            <div className='w-1/3 bg-white rouded-lg flex flex-col justify-start items-start h-4/5 rounded-2xl p-6'>
              {children}
            </div>
          </div>
        </div >
      </Dialog>
    </Transition>
  )
}
