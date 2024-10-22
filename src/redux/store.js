
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer"; // Make sure you combine all reducers here
import createSagaMiddleware from 'redux-saga';
import sagaData from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagaData);

export default store;
