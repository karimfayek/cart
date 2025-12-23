import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice ({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addToCart : (state, action) => {
            const item = action.payload
            const exist = state.items.find(i => i.id === item.id)
            if(exist){
                exist.qty+=1
            }else {

                state.items.push({...item , qty:1})
            }
        },
        removeFromCart : (state , action) => {
            const item = action.payload
            const found = state.items.find(i => i.id === item.id)
            if(found){
                state.items.pop(found)
                
            }
            return
        },
        clearCart: (state) => {
            state.items = []
        }
    }
})
export const {addToCart , removeFromCart , clearCart } = cartSlice.actions ;

export default cartSlice.reducer