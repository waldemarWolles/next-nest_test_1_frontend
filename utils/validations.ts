import { object, string } from 'yup'

export const validationSchema = object({
  email: string().email('Enter a valid email').required('Email is required'),
  password: string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
})
