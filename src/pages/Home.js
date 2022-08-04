import React from 'react'
import Button from '@mui/material/Button';
import "./Pages.css"


const Home = () => {
  return (
    <section className='home-page'>
        <Button className='home-btn' variant="outlined">Log In</Button>
        <Button className='home-btn' variant="contained">Sign Up</Button>
    </section>
  )
}

export default Home