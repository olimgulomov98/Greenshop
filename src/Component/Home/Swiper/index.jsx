import React, { useContext } from 'react'
import { Button, Container, Header, Paragraph, Paragraph1, PlantBig, Section, Slides, SmallBig, Title } from './style'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import { PlantContext } from '../../../Context/Plants';


export const Swipers = () => {
    const [state, dispatch] = useContext(PlantContext)
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
                    state.swiperData.map(({id, title, header, planet, paragraph}) => {
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
