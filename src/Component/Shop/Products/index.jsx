import React, { useContext } from 'react'
import { PlantContext } from '../../../Context/Plants'
import { Card, CardImage, Container, Header, Price, Title, WrapperCards } from './style'

export const Products = () => {
    const [state, dispatch] = useContext(PlantContext)
  return (
    <Container>
        <Header>
            <Header.Wrap>
                <Header.Wrap.Title>All Plants</Header.Wrap.Title>
                <Header.Wrap.Title>New Arrivals</Header.Wrap.Title>
                <Header.Wrap.Title>Sale</Header.Wrap.Title>
            </Header.Wrap>
            <h4>Short by:</h4>
        </Header>
        <WrapperCards>
            {
                state.productsData.map(({id, img, name, price}) => {
                    return(
                        <Card key={id}>
                            <CardImage>
                                <img src={img} alt="Image1" />
                            </CardImage>
                            <Title>{name}</Title>
                            <Price>${price}</Price>
                        </Card>
                    )
                })
            }
            
        </WrapperCards>
    </Container>
  )
}
