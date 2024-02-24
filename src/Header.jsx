import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const navigation = [{id:0,nav:"insert"},{id:1,nav:"view"},{id:2,nav:"update"},{id:3,nav:"delete"}]
  return (
    <>
     <div className='header bg-primary'>
        {navigation.map(nav=><NavLink to={"/"+nav.nav} key={nav.id}>{nav.nav}</NavLink>)}
     </div>
    </>
  )
}

export default Header