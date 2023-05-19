import PropTypes from 'prop-types'

const Title = ({ children, id }) => {
  return (
    <>
      <h2
        id={id && id}
        className='text-2xl dark:text-white font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900'
      >
        {children}
      </h2>
    </>
  )
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}

export default Title
