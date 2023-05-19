const Footer = () => {
  return (
    <div className='py-5 text-center '>
      <p className='text-sm mt-2 opacity-50 dark:text-stone-300'>
        &copy; {new Date().getFullYear()}
        {` `}
        Evan Anderson. All rights reserved.
      </p>
    </div>
  )
}
export default Footer
