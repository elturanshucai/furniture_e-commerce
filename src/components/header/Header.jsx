import React, { useState } from 'react'
import MobileHeader from './container/mobile_header/MobileHeader'
import MainHeader from './container/main_header/MainHeader'

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <>
      <MainHeader setMenu={setMenu} />
      <MobileHeader menu={menu} setMenu={setMenu} />
    </>
  )
}

export default Header