import React from 'react'
import './Hero.css'
import img from '../../assets/hero-furniture.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-img" src={img} alt="Furniture" />
      <div className="hero_text">
        <h2>Discover Elegance and Comfort in Every Piece</h2>
        <p>Welcome to Furniture With Zhully, where craftsmanship meets style. Our collection features exquisite
          furniture designed <br /> to transform your living spaces into a haven of comfort and sophistication.
        </p>
        <button>View Products</button>
      </div>
    </div>
  )
}

export default Hero
