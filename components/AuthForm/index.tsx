/* eslint-disable @next/next/no-img-element */
import { useAppDispatch } from '@/redux/hooks'
import { setuserData } from '@/redux/slices/user'
import { Api } from '@/services/api'
import { ILoginDto } from '@/services/api/types'
import { validationSchema } from '@/utils/validations'
import { Tab, Tabs, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { useFormik } from 'formik'
import { setCookie } from 'nookies'
import React from 'react'
import styles from './AuthForm.module.scss'

type FormType = 'register' | 'login'

type Props = {}

interface IFormInputs {
  email: string
  password: string
}

const AuthForm: React.FC<Props> = () => {
  const dispatch = useAppDispatch()
  const [formType, setFormType] = React.useState<FormType>('login')
  const [errorMessage, setErrorMessage] = React.useState('')
  const formik = useFormik<IFormInputs>({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: validationSchema,
    onSubmit: async (dto: ILoginDto) => {
      try {
        const data = await Api().user[formType](dto)
        console.log(data)
        setCookie(null, 'first_test_token', data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        })
        setErrorMessage('')
        dispatch(setuserData(data))
        console.log(dto)
      } catch (error: any) {
        if (error.response) {
          setErrorMessage(error.response.data.message)
        }
      }
    },
  })

  return (
    <div className={styles.wrapper}>
      <Tabs value={formType}>
        <Tab onClick={() => setFormType('register')} label="Register" />
        <Tab onClick={() => setFormType('login')} label="Login" />
      </Tabs>
      <h2 className={styles.title}>{[formType[0].toLocaleUpperCase(), formType.slice(1)].join('')} Form</h2>
      <form className={styles.formWrapper} onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AuthForm
