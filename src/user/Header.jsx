import React from 'react'
// import UserDelete from './UserDelete'
// import UserInsert from './UserInsert'
// import UserView from './UserView'
// import UserUpdate from './UserUpdate'
import { NavLink } from 'react-router-dom'


// const Header = () => {
//   return (
//       <>
//           <header>
//               <a href="home">logo</a>
//               <nav>
//                   <ul>
//                       <li><NavLink to="/UserDelete">UserDelete</NavLink></li>
//                       <li><NavLink to="/UserInsert">UserInsert</NavLink></li>
//                       <li><NavLink to="/UserView">UserView</NavLink></li>
//                       <li><NavLink to="/UserUpdate">UserUpdate</NavLink></li>
//                   </ul>
//               </nav>
//           </header>
//       </>
//   )
// }
// export default Header;


const Header = () => {
  return (
     <div className='d-flex px-5 py-2 justify-content-start align-items-center header' style={{rowGap:'10px !important'}}>
         <NavLink to={""}>UserDelete</NavLink>
         <NavLink to={""}>UserInsert</NavLink>
         <NavLink to={""}>UserView</NavLink>
         <NavLink to={""}>UserUpdate</NavLink>
     </div>
  )
}

export default Header