import React from 'react'
import { Calling, Container, Location, Logo, Message, Wrapper } from './style'

export const Address = () => {
  return (
    <Container>
        <Logo />
        <Wrapper>
            <Location />
            <Wrapper.Title>70 West Buckingham Ave.<br /> Farmingdale, NY 11735</Wrapper.Title>
        </Wrapper>
        <Wrapper>
            <Message />
            <Wrapper.Title>contact@greenshop.com</Wrapper.Title>
        </Wrapper>
        <Wrapper>
            <Calling />
            <Wrapper.Title>+88 01911 717 490</Wrapper.Title>
        </Wrapper>
    </Container>
  )
}
