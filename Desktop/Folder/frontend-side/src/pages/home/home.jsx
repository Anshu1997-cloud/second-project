import React, { useContext } from 'react'
import Layout from '../../components/layout/layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import NavSection from '../../components/heroSection/NavSection'
import Filter from '../../components/Filter/Filter'
import ProductCard from '../../components/ProductCard/ProductCard'
import Track from '../../components/Track/Track'
import Widget from '../../components/heroSection/Widget'
import Testimonial from '../../components/Testimonial/Testimonial'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../../redux/cartSlice'

function Home () {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart)

  console.log(cartItem) 
  
  return (
    <Layout>
      <div className='flex'>
      </div>
      <NavSection/>
      <HeroSection/>
      <Widget/>
       <Filter/>
       <ProductCard/>
       <Track/>
       <Testimonial/>
    </Layout>
  )
}

export default Home