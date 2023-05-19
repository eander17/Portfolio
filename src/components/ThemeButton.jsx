import { FaMoon, FaSun } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const ThemeButton = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const handleThemeSwitch = () =>
    setTheme(theme === 'dark' ? 'light' : 'dark')

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <button
      type='button'
      onClick={handleThemeSwitch}
      className='dark-mode-toggler group'
    >
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeButton
