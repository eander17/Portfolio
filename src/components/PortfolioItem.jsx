/** @format */
import { FaGithub } from 'react-icons/fa'

import PropTypes from 'prop-types'

const PortfolioItem = ({ title, imgUrl, stack, link, repo }) => {
  const githubPage = `${import.meta.env.VITE_GITHUB_PAGE}${repo}`

  return (
    <div
      className='border-2 rounded-md overflow-hidden 
        border-stone-900 
        dark:border-stone-500'
    >
      <img
        src={imgUrl}
        alt='portfolio image'
        className='w-full h-36 md:h-48 object-cover cursor-pointer'
      />
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>
          {title}
        </h3>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
          {stack.map((item, index) => (
            <span
              className='inline-block px-2 py-1 font-semibold rounded-md 
              border-2 border-stone-900 bg-gray-700 text-white
              dark:border-indigo-900 dark:bg-indigo-800'
              key={index}
            >
              {item}
            </span>
          ))}
        </p>
        <div className='flex flex-row items-start justify-start'>
          {repo && (
            <a
              href={githubPage}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block mt-3 mx-1 mr-2 px-2 py-2 font-semibold rounded-3xl
          text-white bg-gray-800 
          dark:bg-stone-600 hover:bg-indigo-600 dark:hover:bg-indigo-600
          transition-all duration-200 ease-linear cursor-pointer hover:rounded-lg'
            >
              <FaGithub size='1.5rem' />{' '}
            </a>
          )}
          {link && (
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block mt-3 px-4 py-2 font-semibold rounded-xl
          text-white bg-gray-800  
          dark:bg-stone-600 hover:bg-indigo-600 dark:hover:bg-indigo-600
          transition-all duration-200 ease-linear cursor-pointer hover:rounded-md
          '
            >
              Check it out!
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
}

export default PortfolioItem
