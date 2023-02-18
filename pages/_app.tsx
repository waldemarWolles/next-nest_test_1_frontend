import { setuserData } from '@/redux/slices/user'
import { wrapper } from '@/redux/store'
import { Api } from '@/services/api'
import '@/styles/globals.css'
import { theme } from '@/theme'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.getInitialProps = wrapper.getInitialAppProps((store) => async ({ ctx, Component }) => {
  try {
    const userData = await Api(ctx).user.getMe()
    store.dispatch(setuserData(userData))
  } catch (error) {
    console.log(error)
  }

  return {
    pageProps: {
      ...(Component.getInitialProps ? await Component.getInitialProps({ ...ctx, store }) : {}),
    },
  }
})

export default wrapper.withRedux(App)
