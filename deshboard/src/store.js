import { configureStore } from '@reduxjs/toolkit'
import activeUser from './slices/activeUser'

export const store = configureStore({
  reducer: {
    currentUser:activeUser
  },
})