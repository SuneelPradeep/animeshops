import React, { useContext } from 'react'
import MainSection from './components/MainSection'
import { AppContext, useProductContext } from './context/productcontext'

const About = () => {

 
  const data = {
    home : 'Anime Merch',
    about : 'Anime Merch Store'
  }
  return (
    <>
    {/* <h1> {sampname }</h1> */}
    <MainSection myData={data.about} />
    <div style={{justifyContent:'center',alignItems:'center',width:'85%',paddingLeft:'10rem'}}>
    <p>Anime, style of animation popular in Japanese films. Early anime films were intended primarily for the Japanese market and, 
      as such, employed many cultural references unique to Japan. For example, the large eyes of anime characters are commonly perceived in Japan 
      as multifaceted “windows to the soul.” Much of the genre is aimed at children, but anime films are sometimes marked by adult themes and 
      subject matter. Modern anime began in 1956 and found lasting success in 1961 with the establishment of Mushi Productions by Osamu Tezuka, 
      a leading figure in modern manga, the dense, novelistic Japanese comic book style that contributed greatly to the aesthetic of anime. 
      Anime such as Miyazaki Hayao’s Princess Mononoke (1997) are the modern equivalent of the epic folk adventures once filmed by Japanese 
      masters such as Mizoguchi Kenji and Kurosawa Akira. At the turn of the 21st century, anime began to attain wide international popularity 
      with the Pokémon television series and films such as Miyazaki’s Spirited Away (2002), winner of an Academy Award for best animated feature 
      film.
      </p>
      <p style={{marginTop:'3rem'}}>Recent popular anime are creating a Havoc among the international Audience . Demon Slayer, Dragon Ball Super ,Naruto , FullMetal Alchemist :BrotherHood, One Piece, Hunter x Hunter all these are one of the greatest animes ever created </p>  </div>
    </>
  )
}

export default About