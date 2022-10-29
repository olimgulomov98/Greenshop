import styled, {css} from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/icons/Logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/Search.svg";
import { ReactComponent as BasketIcon } from "../../assets/icons/Basket.svg";
import { ReactComponent as LogoutIcon } from "../../assets/icons/Logout.svg";

const flex = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 120px;
    ${flex}
    border: 2px solid;
`
export const Wrapper = styled.div`
    ${flex}
    gap: 30px;
`
export const Logo = styled(LogoIcon)`
`
export const Search = styled(SearchIcon)`
`
export const Basket = styled(BasketIcon)`
`