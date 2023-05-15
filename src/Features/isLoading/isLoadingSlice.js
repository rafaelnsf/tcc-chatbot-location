import { createSlice } from '@reduxjs/toolkit'

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: {
        value: false,
    },
    reducers: {
        enableLoading: (state) => {
            state.value = true
        },
        disableLoading: (state) => {
            state.value = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { enableLoading } = isLoadingSlice.actions
export const { disableLoading } = isLoadingSlice.actions

export default isLoadingSlice.reducer
