import { createWrapper } from 'next-redux-wrapper'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import userReducer from './slices/user'

export function makeStore() {
  return configureStore({
    reducer: { user: userReducer },
  })
}

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const wrapper = createWrapper<AppStore>(makeStore)
