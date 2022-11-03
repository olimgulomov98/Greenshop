import React, { useState } from 'react'
import { BarSideCategoriesData, BarSideSizeData } from '../../../utils/data'
import { BarSideParag, BarSideTitle, Container, Wrapper } from './style'
import SuperSale from '../../../assets/images/SuperSale.png'
import { Slider, Switch } from 'antd';

export const BarSides = () => {
    const [disabled, setDisabled] = useState(false);

//   const onChange = (checked: boolean) => {
//     setDisabled(checked);
//   };
  return (
    <Container>
        <Wrapper>
                <BarSideTitle>Categories</BarSideTitle>
                {
                    BarSideCategoriesData.map(({id, title, number}) => {
                        return(
                            <Wrapper.Box key={id}>
                                <BarSideParag>{title}</BarSideParag>
                                <BarSideParag>({number})</BarSideParag>
                            </Wrapper.Box>
                        )
                    })
                }  
            </Wrapper>
            <Wrapper>
                <BarSideTitle>Price Range</BarSideTitle>
                {/* <Slider defaultValue={30} disabled={disabled} /> */}
                <Slider range defaultValue={[20, 50]} disabled={disabled} />
                {/* Disabled: <Switch size="small" checked={disabled} onChange={onChange} /> */}
                {/* Price: <Switch size="small" checked={disabled} onChange={onChange} /> */}
                <Wrapper.Button>Filter</Wrapper.Button>
            </Wrapper>
            <Wrapper>
                <BarSideTitle>Size</BarSideTitle>
                {
                    BarSideSizeData.map(({id, title, number}) => {
                        return(
                            <Wrapper.Box key={id}>
                                <BarSideParag>{title}</BarSideParag>
                                <BarSideParag>({number})</BarSideParag>
                            </Wrapper.Box>
                        )
                    })
                } 
            </Wrapper>
            <img src={SuperSale} alt="SuperSale" />
    </Container>
  )
}