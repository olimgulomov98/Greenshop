import React from 'react'
import { Container, Wrapper, Logo, Search, Basket } from './style'

export const Navbar = () => {
  return (
    <Container>
        <Logo />
        <Wrapper>
            <h1>home</h1>
            <h1>shop</h1>
        </Wrapper>
        <Wrapper>
            <Search />
            <Basket />
            <button>login</button>
        </Wrapper>  
    </Container>
  )
}