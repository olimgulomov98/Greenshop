import styled, {css} from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/icons/Logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/Search.svg";
import { ReactComponent as BasketIcon } from "../../assets/icons/Basket.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/Logout.svg";
import { ReactComponent as Rectangles } from "../../assets/icons/Rectangles.svg"

const flex = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const font = css`
    font-size: 16px;
    line-height: 19px;
`

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 50px;
    ${flex}
    border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
    box-sizing: border-box;

    @media (max-width: 1600px) {
        padding: 0px 80px;
    }
    @media (max-width: 1500px) {
        padding: 0px 50px;
    }
    @media (max-width: 1000px) {
        padding: 0px 70px;
    }
    @media (max-width: 700px) {
        padding: 0px 130px;
    }
    @media (max-width: 600px) {
        padding: 0px 80px;
    }
    @media (max-width: 500px) {
        padding: 0px 50px;
    }
    @media (max-width: 400px) {
        padding: 0px 30px;
    }
    @media (max-width: 330px) {
        padding: 0px 20px;
    }
`
export const Wrapper = styled.div`
    ${flex}
    gap: 30px;
`
Wrapper.Title = styled.h1`
    font-weight: 400;
    color: var(--dark-black);
    ${font}
`
Wrapper.Button = styled.button`
    width: 100px;
    height: 35px;
    background: var(--green);
    border-radius: 6px;
    border: none;
    font-weight: 500;
    ${font}
    color: var(--white);
    position: relative;
    padding-left: 15px;
`
export const WrapperBasket = styled.div`
    position: relative;
`
export const Counter = styled.p`
    position: absolute;
    top: -6px;
    right: -8px;
    width: 20px;
    height: 20px;
    background-color: var(--green);
    color: var(--white);
    border-radius: 50%;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--white);


`
export const Selected = styled.select`
    /* background-color: yellow; */
    background-image: url(Rectangles);
    border: none;
    outline: none;
    -webkit-appearance: none;
`
export const Logo = styled(LogoIcon)`
`
export const Search = styled(SearchIcon)`
`
export const Basket = styled(BasketIcon)`
`
export const Logout = styled(LogoutIcon)`
    position: absolute;
    left: 18px;
`
export const Rectangle = styled(Rectangles)`
   display: none;
`