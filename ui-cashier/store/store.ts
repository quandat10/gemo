import {
    action,
    Action,
    createContextStore,
} from 'easy-peasy'

import {
    ItemOrder,
    Product,
} from './type'

interface StoreModel {
    productActive: Product
    listOrders: ItemOrder[]

    setProductActive: Action<StoreModel, Product>
    setListOrders: Action<StoreModel, ItemOrder[]>
}

export const Store = createContextStore<StoreModel>({
    productActive: {},
    listOrders: [],

    setProductActive: action((state, product) => {
        state.productActive = product
    }),

    setListOrders: action((state, items) => {
        state.listOrders = items
    })
})