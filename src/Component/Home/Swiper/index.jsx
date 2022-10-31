import React from 'react'
import { Button, Container, Header, Paragraph, Paragraph1, PlantBig, Section, Slides, SmallBig, Title } from './style'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
const data = [
    {id: 1, title: 'Welcome to GreenShop', header: 'Let’s Make a Better', planet: 'Planet', paragraph: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!'},
    {id: 2, title: 'Welcome to GreenShop', header: 'Let’s Make a Better', planet: 'Planet', paragraph: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!'},
    {id: 3, title: 'Welcome to GreenShop', header: 'Let’s Make a Better', planet: 'Planet', paragraph: 'We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!'}
]
export const Swipers = () => {
  return (
    <Container>
        <Swiper 
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={true} 
            modules={[Autoplay, Pagination]} 
            className="mySwiper">
                {
                    data.map(({id, title, header, planet, paragraph}) => {
                        return(
                            <SwiperSlide key={id}>
                                <Slides>
                                    <div>
                                        <Title>{title}</Title>
                                        <Header>{header} <Section>{planet}</Section></Header>
                                        <Paragraph>{paragraph}</Paragraph>
                                        <Paragraph1>We are an online plant shop offering a wide range</Paragraph1>
                                        <Button>SHOP NOW</Button>
                                    </div>
                                    <Slides.Wrap>
                                        <PlantBig />
                                        <SmallBig />
                                    </Slides.Wrap>
                                </Slides>
                            </SwiperSlide>
                        )
                    })
                }   
      </Swiper>
    </Container>
  )
}
