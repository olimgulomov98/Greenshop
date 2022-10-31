import styled from "styled-components";
import { ReactComponent as CaruselPlantBig } from '../../../assets/icons/caruselPlantBig.svg'
import { ReactComponent as CaruselPlantSmall } from '../../../assets/icons/caruselPlantSmall.svg'

export const Container = styled.div`
    width: 100%;
    height: 450px;
    /* border: 2px solid; */
    background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);

    @media (max-width: 835px) {
        height: 400px;
    }

    @media (max-width: 430px) {
        height: 226px;
    }
`
export const Slides = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-left: 40px;

    @media (max-width: 430px) {
        padding-left: 16px;
        gap: 0;
    }
`
Slides.Wrap = styled.div`
    width: 500px;
    height: 450px;
    position: relative;

    @media (max-width: 835px) {
        width: 400px;
        height: 400px;
        margin-right: -40px;
    }

    @media (max-width: 430px) {
        width: 213px;
        height: 213px;
        margin-right: -30px;
        margin-bottom: 15px;
    }
`
export const PlantBig = styled(CaruselPlantBig)`
    height: 450px;

    @media (max-width: 835px) {
        width: 400px;
        height: 400px;
    }

    @media (max-width: 430px) {
        width: 213px;
        height: 213px;
    }
`
export const SmallBig = styled(CaruselPlantSmall)`
    position: absolute;
    left: 60px;
    bottom: 30px;

    @media (max-width: 430px) {
        width: 82px;
        height: 82px;
        left: 10px;
        bottom: 12px;
    }
`
export const Title = styled.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;  
    letter-spacing: 0.1em;

    @media (max-width: 430px) {
        font-size: 11px;
        line-height: 16px;
    }
`
export const Header = styled.h1`
    font-weight: 900;
    font-size: 60px;
    line-height: 60px;
    text-transform: uppercase;
    margin: 7px 0 5px 0;

    @media (max-width: 835px) {
        font-size: 48px;
        line-height: 48px;
    }

    @media (max-width: 430px) {
        font-size: 22px;
        line-height: 25px;
        margin: 0 0 3px 0;
    }
`
export const Section = styled.span`
    color: var(--green);
`
export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;

    @media (max-width: 430px) {
        display: none;
    }
`
export const Paragraph1 = styled.p`
    display: none;

    @media (max-width: 430px) {
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        display: contents;
    }
`
export const Button = styled.button`
    width: 140px;
    height: 40px;
    background: var(--green);
    border-radius: 6px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: var(--white);
    margin-top: 44px;
    border: none;

    @media (max-width: 430px) {
        background: none;
        color: var(--green);
        margin-top: 11px;
        font-size: 12px;
        line-height: 14px;
        width: 68px;
        height: 14px;
        display: block;
    }
`