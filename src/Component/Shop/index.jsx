import React from 'react'
import { BarSides } from './BarSide'
import { Products } from './Products'
import { Container } from './style'

export const Shop = () => {
  return (
    <Container>
        <BarSides />
        <Products />
    </Container>
  )
}
