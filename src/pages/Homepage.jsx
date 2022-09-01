import React from 'react'
import Slidesection from '../components/Slidesection';
import Navbar from '../components/Navbar';
import Projectsection from '../components/Projectsection';
import Reviewsection from '../components/Reviewsection';
import Teamsection from '../components/Teamsection';
import Herosection from '../components/Herosection';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div>
        <Navbar/>
        <Herosection/>
        <Teamsection/>
        <Slidesection/>
        <Projectsection/>
        <Reviewsection/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default Homepage;