import React from 'react'
import { Container, Wrapper, Logo, Search, Basket, Logout, WrapperBasket, Counter, Rectangle } from './style'

export const Navbar = () => {
  return (
    <Container>
        <Logo />
        <Wrapper>
            <Wrapper.Title>Home</Wrapper.Title>
            <Wrapper.Title>Shop</Wrapper.Title>
        </Wrapper>
        <Wrapper>
            <Search />
            <WrapperBasket>
              <Basket />
              <Counter>6</Counter>
            </WrapperBasket>
            <Wrapper.Button><Logout />Login</Wrapper.Button>
            <Rectangle></Rectangle>
        </Wrapper>  
    </Container>
  )
}