import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    padding: 0 50px;
`
Container.Title = styled.h1`
    font-weight: 700;
    font-size: 30px;
    line-height: 16px;
    text-align: center;
`
Container.Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    margin: 15px 0 35px 0;
`
Container.Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 44px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        place-items: center;
    }

    @media (max-width: 430px) {
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
    }
`
export const Card = styled.div`
    width: 268px;
    height: 350px;
    background: #FBFBFB;
`
Card.Title = styled.h3`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--green);
    padding: 8px 0 0 15px;
`
Card.Header = styled.h1`
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    padding: 4px 10px 0 15px;
`
Card.Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    padding: 4px 0 0 15px;
    color: #727272;
`