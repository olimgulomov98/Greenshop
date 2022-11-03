import React from 'react'
import { Box, Container, Facebook, Info, Instagram, Linkedin, Paragraph, Title, Twitter, Union, Wrap, Wrapper } from './style'
import Payment from '../../assets/images/Payment.png'

export const Footer = () => {
  return (
    <Container>
        <Wrap>
            <div>
                <Title>My Account</Title>
                <Paragraph>My Account</Paragraph>
                <Paragraph>Address</Paragraph>
                <Paragraph>Wishlist</Paragraph>
            </div>
            <div>
                <Title>Categories</Title>
                <Paragraph>House Plants</Paragraph>
                <Paragraph>Potter Plants</Paragraph>
                <Paragraph>Seeds</Paragraph>
                <Paragraph>Small Plants</Paragraph>
                <Paragraph>Accessories</Paragraph>
            </div>
            <div>
                <Title>Social Media</Title>
                <Wrapper>
                    <Box><Facebook /></Box>
                    <Box><Instagram /></Box>
                    <Box><Twitter /></Box>
                    <Box><Linkedin /></Box>
                    <Box><Union /></Box>
                </Wrapper>
                <Title>We accept</Title>
                <img src={Payment} alt="Payment" style={{marginTop: '13px'}} />
            </div>
        </Wrap>
        <Info>
            <p>© 2021 GreenShop. All Rights Reserved.</p>
        </Info>
    </Container>
  )
}
