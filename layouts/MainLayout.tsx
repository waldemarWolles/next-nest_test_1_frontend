/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/jsx-no-comment-textnodes */
import AuthForm from '@/components/AuthForm'
import Header from '@/components/Header'
import type { NextPage } from 'next'
import { ReactNode } from 'react'

type Props = {
  className?: string
  children: ReactNode
}

const MainLayout: NextPage<Props> = ({ children, className }) => {
  return (
    <div>
      <Header />
      <div className={className}>{children}</div>
    </div>
  )
}

export default MainLayout
