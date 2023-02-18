import React from 'react'
import styles from './Header.module.scss'

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <div className={styles.wrapper}>
      <div>LOGO</div>
      <div>USER AVATAR</div>
    </div>
  )
}

export default Header
