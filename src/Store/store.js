import { configureStore } from '@reduxjs/toolkit'
import modeOptionReducer from '../Features/modeOption/modeOptionSlice';
import isLoadingRecuder from '../Features/isLoading/isLoadingSlice';

export default configureStore({
    reducer: {
        modeOption: modeOptionReducer,
        isLoading: isLoadingRecuder
    },
})
