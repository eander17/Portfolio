/* eslint-disable react/no-unescaped-entities */
const Intro = () => {
  return (
    <>
      <div className='flex items-center justify-center flex-col text-center pt-20 pb-6'>
        <img
          src='/assets/ProfilePicture.jpg'
          alt='Profile Picture'
          className='rounded-full w-auto h-36 mb-4 '
        />
        <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'>
          Evan Anderson
        </h1>
        <h2 className='text-base md:text-xl mb-3 font-medium'>
          Student & Software Engineer
        </h2>
        <p className='text-sm max-w-xl mb-6 font-bold'>
          I am a student at the University of Colorado Colorado
          Springs, expecting to graduate in December 2023 with a
          Bachelor's of Science in Computer Science. I am currently
          looking for work in the field of software engineering.
          <br />
          <br />
          I am a passionate learner and love to learn new things. I am
          currently learning about web development and am working on a
          few projects to help me learn. In my free time, I am
          building my own home lab to learn more about networking and
          server administration.
          <br />
          <br />
          My non-CS hobbies include playing D&D with my friends,
          kayaking, and learning about fermentation.
        </p>
      </div>
    </>
  )
}
export default Intro
