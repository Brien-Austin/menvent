import React from 'react'

interface HeroProps {
    text : string
}
const Hero:React.FC<HeroProps> = ({text}) => {
  return (
<h1 className='dark:text-white dark:text-2xl tracking-wide dark:font-semibold '>{text}</h1>
  )
}

export default Hero