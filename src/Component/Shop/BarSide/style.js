import styled from "styled-components";

export const Container = styled.div`
    width: 310px;
    /* background: var(--dark-white); */
`
export const Wrapper = styled.div`
    padding: 14px 24px 36px 18px;
`
Wrapper.Box = styled.div`
    display: flex;
    justify-content: space-between;
`
export const BarSideTitle = styled.h1`
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
`
export const BarSideParag = styled.p`
    font-weight: 600;
    font-size: 15px;
    line-height: 40px;
    color: #3D3D3D;
    margin-left: 12px;

    :active {
        color: var(--green);
    }
`
Wrapper.Button = styled.button`
    width: 90px;
    height: 35px;
    background: var(--green);
    border: none;
    border-radius: 6px;
    color: var(--white);
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
`