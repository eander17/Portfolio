// import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import ThemeButton from './ThemeButton'
// import PropTypes from 'prop-types'

const Navbar = () => {
  return (
    <div
      className=' top-0 left-0 w-screen h-16 m-0 shadow-lg
        flex flex-row  justify-end items-center 
         bg-gray-300 text-gray-900 
         dark:bg-gray-950 dark:text-white
        '
    >
      <div className='group px-2'>
        <FaGithub className='navbar-icon group' />
        <span className='navbar-tooltip group-hover:scale-100'>
          Check out my GitHub!
        </span>
      </div>

      <div className='group px-2'>
        <FaLinkedin className='navbar-icon group' />
        <span className='navbar-tooltip group-hover:scale-100'>
          Connect with me on LinkedIn!
        </span>
      </div>
      <div className='group px-2 mr-2'>
        <ThemeButton className='navbar-icon group' />
        <span className='dm-toggler-tooltip group-hover:scale-100'>
          Toggle Dark Mode
        </span>
      </div>
    </div>
  )
}

// const NavbarIcon = ({ icon }) => {
//   return <div className='navbar-icon'>{icon}</div>
// }

// NavbarIcon.propTypes = {
//   icon: PropTypes.element.isRequired,
// }

export default Navbar

// <ul className='flex flex-row justify-center py-2 my-1 self-end h-12'>
//   <li>
//     <ThemeButton />
//   </li>
// </ul>
