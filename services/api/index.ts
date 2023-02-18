import { GetServerSidePropsContext, NextPageContext } from 'next'
import Cookies, { parseCookies } from 'nookies'
import axios from 'axios'
import { UserApi } from './user'

export type ApiReturnType = {
  user: ReturnType<typeof UserApi>
}

export const Api = (ctx?: NextPageContext | GetServerSidePropsContext): ApiReturnType => {
  const cookies = ctx ? Cookies.get(ctx) : parseCookies()
  const token = cookies.first_test_token

  const instance = axios.create({
    baseURL: 'http://localhost:7777/',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })

  const apis = {
    user: UserApi,
  }

  return Object.entries(apis).reduce((prev, [key, fn]) => {
    return {
      ...prev,
      [key]: fn(instance),
    }
  }, {} as ApiReturnType)
}
