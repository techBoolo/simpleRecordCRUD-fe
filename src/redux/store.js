import { configureStore } from '@reduxjs/toolkit'
import recordReducer from './reducers/recordSlice.js'

const store = configureStore({
  reducer: {
    record: recordReducer
  }
})

export default store
