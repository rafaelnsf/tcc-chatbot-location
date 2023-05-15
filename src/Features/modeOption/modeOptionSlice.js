import { createSlice } from '@reduxjs/toolkit'

export const modeOptionSlice = createSlice({
    name: 'modeOption',
    initialState: {
        value: 'light',
    },
    reducers: {
        change: (state) => {
            state.value === 'light' ? state.value = 'dark' : state.value = 'light'
        },
    },
})

export const { change } = modeOptionSlice.actions

export default modeOptionSlice.reducer
