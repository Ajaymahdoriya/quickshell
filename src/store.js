import { configureStore } from '@reduxjs/toolkit';
import { DataReducer, SelectDataReducer } from './reducers/reducers';

const store = configureStore({
    reducer: {
        DataReducer,
        SelectDataReducer
    }
});

export default store;
