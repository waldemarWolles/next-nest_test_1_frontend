/* eslint-disable @next/next/no-img-element */
import { TextField } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useFormik } from 'formik'
import Image from 'next/image'
import React from 'react'
import { object, string } from 'yup'
import styles from './AuthForm..module.scss'

type FormType = 'Register' | 'Log in'

type Props = {}

const validationSchema = object({
  email: string().email('Enter a valid email').required('Email is required'),
  password: string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
})

const AuthForm: React.FC<Props> = () => {
  const [formType, setFormType] = React.useState<FormType>('Register')
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
      formType: 'Register',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{formType} Form</h2>
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
