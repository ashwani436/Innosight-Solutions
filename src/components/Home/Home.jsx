import React from 'react'
import Banner from './Banner/Banner'
// import Carousel from './Crousals/Carousel'
import Carousl from './Crousals/Carousel'
import About from '../About/About'
import ResidentialProjects from '../Projects/ResidentialProjects'
import CommercialProjects from '../Projects/CommercialProjects'
import Association from '../Associations/Association'
import Teams from '../Teams/Teams'
import Testimonials from '../Testimonials/Testimonials'
import Services from '../Services/Services'

function Home() {
  return (
    <div>
      <Carousl/>
      <Banner />
      <About />
      <ResidentialProjects />
      <CommercialProjects />
      <Association />
      <Services/>
      <Testimonials/>
      <Teams />
      
    </div>
  )
}

export default Home