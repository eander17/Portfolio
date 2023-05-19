import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'
import Title from './Title'

const Portfolio = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Title>My Projects</Title>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {portfolio.map((project) => (
            <PortfolioItem
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Portfolio
