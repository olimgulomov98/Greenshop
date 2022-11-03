import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%);
    padding-left: 50px;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
Header.Wrap = styled.div`
    display: flex;
    gap: 35px;
`
Header.Wrap.Title = styled.h1`
    font-weight: 700;
    font-size: 15px;
    line-height: 16px;
`
export const WrapperCards = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 33px;
    margin-top: 38px;
`
export const Card = styled.div`

`
export const CardImage = styled.div`
    width: 258px;
    height: 300px;
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled.h3`
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    margin: 12px 0 6px 0;
`
export const Price = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: var(--green);
`