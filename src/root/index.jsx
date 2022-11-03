import React, { useContext } from 'react'
import { Footer } from '../Component/Footer'
import { Home } from '../Component/Home'
import { Navbar } from '../Component/Navbar'
import { Shop } from '../Component/Shop'
import { PlantContext } from '../Context/Plants'
import { Container } from './style'

export const Root = () => {
  const [state, dispatch] = useContext(PlantContext)

  return (
    <Container>
      <Navbar />
      <Shop />
      {/* <Home /> */}
      <Footer />
    </Container>
    
  )
}
