import React from 'react'
import { Address } from './Address'
import { Blog } from './Blog'
import { Container } from './style'
import { Swipers } from './Swiper'

export const Home = () => {
  return (
    <Container>
        <Swipers />
        <Blog />
        <Address />
    </Container>
  )
}
