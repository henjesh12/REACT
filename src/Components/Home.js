import React from 'react'
import Image from '../Image/imgg.jpg'
import image from '../Image/imgg.jpg'
import imag from '../Image/imgg.jpg'
const Home = () => {
  return (
    <div>
      <div  style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop:'100px'}}>
      <h1>KING KOHLI</h1>
      <img src={Image} alt="images" height={300} width={600}></img>
      <p> Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team<br/>He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket<br/> He is the real goat of ODI cricket .he comlete 50centurays in his ODI crear</p>
      <h2><marquee>INDIAN CRICKET TEAM</marquee></h2>
      <img src={image} alt="images" height={300} width={600}></img>
      <h3>The current world cup team members is</h3>
      <ul>
        <li>Gill</li>
        <li>Rohit</li>
        <li>Virat</li>
        <li>Shreys</li>
        <li>Rahul</li>
        <li>Surya</li>
        <li>Jadeja</li>
        <li>Bumrha</li>
        <li>Shami</li>
        <li>Kuldeep</li>
        <li>Siraj</li>
      </ul>
      <h1>World cup Final match</h1>
      <img src={imag} alt="images" height={300} width={600}/>

    </div>
    </div>

  )
}

export default Home
