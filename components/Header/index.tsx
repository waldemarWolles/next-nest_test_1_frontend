import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 60px;
  background-color: #fdce4c;
`

type Props = {}

const Header: React.FC<Props> = () => {
  return (
    <HeaderWrapper>
      <div>LOGO</div>
      <div>USER AVATAR</div>
    </HeaderWrapper>
  )
}

export default Header
