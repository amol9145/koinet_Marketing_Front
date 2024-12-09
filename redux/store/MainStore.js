import { configureStore } from '@reduxjs/toolkit';
import reportReducer from '../reducers/ReportReducer';

const store = configureStore({
    reducer: {
        reports: reportReducer,
    },
});

export default store;