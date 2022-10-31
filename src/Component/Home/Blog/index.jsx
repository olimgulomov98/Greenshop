import React from 'react'
import { data } from './data'
import { Card, Container } from './style'


export const Blog = () => {
  return (
    <Container>
        <Container.Title>Our Blog Posts</Container.Title>
        <Container.Paragraph>We are an online plant shop offering a wide range of cheap and trendy plants.</Container.Paragraph>
        <Container.Wrapper>
            {
                data.map(({id, img, title, header, paragraph}) => {
                    return(
                        <Card key={id}>
                            <img src={img} alt="Plant1" />
                            <Card.Title>{title}</Card.Title>
                            <Card.Header>{header}</Card.Header>
                            <Card.Paragraph>{paragraph}</Card.Paragraph>
                        </Card>
                    )
                })
            }  
        </Container.Wrapper>
    </Container>
  )
}
