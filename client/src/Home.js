import React from 'react'
import MainSection from './components/MainSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import FeatureProducts from './components/FeatureProducts'

const Home = () => {
  const data = {
    home : 'Anime Merch',
    about : 'Anime Merch Store'
  }
  return (
    <>
    <MainSection myData={data.home} />
    <div style={{marginBottom:'20rem'}}></div>
    <FeatureProducts />
    <Services />
    <Trusted />
    
    </>
  )
}



export default Home