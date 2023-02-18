import { IResponseUserDto } from './../../services/api/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { HYDRATE } from 'next-redux-wrapper'

export interface IUser {
  data: IResponseUserDto | null
}

const initialState: IUser = {
  data: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserData: (state, action: PayloadAction<IResponseUserDto>) => {
      state.data = action.payload
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        data: action.payload.user.data,
      }
    },
  },
})

export const { setuserData } = userSlice.actions

export const selectUserData = (state: RootState) => state.user.data

export default userSlice.reducer
