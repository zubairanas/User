import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {Serives} from './slice/serviceSlice'
import { UserReducers } from './slice/authSlice'
import { OrderReducers } from './slice/orderSlice'
import { QueryReducers } from './slice/querySlice'
const rootReducer = combineReducers({
  cart : Serives,
  user : UserReducers,
  order : OrderReducers,
  query : QueryReducers
   
})

const persistConfig = {
  key: 'laundryWebUk',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
})

export const persistor = persistStore(store)