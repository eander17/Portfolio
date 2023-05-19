import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'

const Timeline = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center my-20'>
      <div className='w-full md:w-7/12'>
        <Title>Timeline</Title>
        {timeline.map((item, id) => (
          <TimelineItem
            key={id}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
export default Timeline
