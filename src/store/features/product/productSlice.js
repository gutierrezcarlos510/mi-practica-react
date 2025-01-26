import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    filterText : '',
    inStockOnly : false
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setFilterText: (state, action) => {
            state.filterText = action.payload
        },
        setInStockOnly: (state, action) => {
            state.inStockOnly = action.payload
        }
    }
});
export const { setFilterText, setInStockOnly } = productSlice.actions;
export default productSlice.reducer