import Title from './Title'

const Contact = () => {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <form
          action='https://getform.io/f/b8065422-4479-4a73-9bc0-27ed414646fe'
          method='POST'
          className='flex flex-col w-full md:w-7/12'
        >
          <Title>Contact</Title>
          <input
            type='text'
            name='name'
            placeholder='name'
            className='p-2 my-1 bg-transparent border-2 border-stone-900 dark:border-fuchsia-900 rounded-md focus:outline-none '
          />
          <input
            type='email'
            name='email'
            placeholder='email'
            className='p-2 my-2 bg-transparent border-2 rounded-md focus:outline-none border-stone-900 dark:border-fuchsia-900'
          />
          <textarea
            name='message'
            placeholder='Message'
            rows='10'
            className='p-2 my-1 mb-4 bg-transparent border-2 rounded-md focus:outline-none border-stone-900 dark:border-fuchsia-900'
          />
          <button
            className='
            text-center inline-block 
            px-8 py-3 w-max text-base 
            font-medium rounded-md 
            text-white drop-shadow-md rounded-3xl 
            bg-gradient-to-r from-fuchsia-500 to-violet-800 
          hover:stroke-white hover:bg-gradient-to-r hover:from-fuchsia-700 hover:to-fuchsia-800 hover:rounded-lg 
             transition-all duration-200 ease-linear cursor-pointer '
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}
export default Contact
