import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '../features/appSlice'

export const store = configureStore({
  reducer: {
    app: rootReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch