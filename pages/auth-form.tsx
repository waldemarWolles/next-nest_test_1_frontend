import type { NextPage } from 'next'
import MainLayout from '../layouts/MainLayout'
import AuthForm from '../components/AuthForm'

const MessagesPage: NextPage = () => {
  return (
    <MainLayout>
      <AuthForm />
    </MainLayout>
  )
}

export default MessagesPage
