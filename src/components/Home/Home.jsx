import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home_container'>
      <div className='home_left'>
        <div className='home_main'>
          <img src='./food.svg' alt='food' className='home_text1' />
          <p className='home_text2'>Discover Restaurant & Delicious Food</p>
          <div className='search_container'>
            <input
              type='text'
              className='search_input'
              placeholder='search restaurant, food'
            />
            <button className='go_btn'>GO</button>
          </div>
        </div>
      </div>
      <div className='home_right'>
        <img src='./home-food.png' alt='home-food' className='home_food' />
        <img
          src='./lettuce.png'
          alt='lettuce'
          className='lettuce'
        />
        <img src='./dots-bg.svg' alt='dots' className='dots_home' />
      </div>

      <div className='home_bottom'>
        <button className='location_btn'>
          <img
            src='./place-holder.svg'
            alt='place-holder'
            className='location_icon_home'
          />
          Indore
        </button>
        <div className='arrows_right'>
          <img src='./left-arrow.svg' alt='homearrowleft' />
          <img src='./right-arrow.svg' alt='homearrowright' />
        </div>
      </div>
    </div>
  )
}

export default Home
