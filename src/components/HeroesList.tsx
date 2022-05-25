// import { useDeferredValue } from 'react'
import { memo } from 'react'
import { Hero } from '../types/hero'
import HeroCard from './HeroCard'


const HeroesList = ({ heroes }: { heroes: Hero[] }) => {
  console.log('HeroesList chargé')
  // const deferredHeroes = useDeferredValue(heroes)
  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {heroes.map((hero) => <HeroCard key={hero.id} hero={hero}/>)}
    </div>
  )

}

export default memo(HeroesList)