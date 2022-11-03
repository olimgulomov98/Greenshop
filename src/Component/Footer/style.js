import styled from "styled-components";
import { ReactComponent as Facebooks} from '../../assets/icons/Facebook.svg'
import { ReactComponent as Instagrams} from '../../assets/icons/Instagram.svg'
import { ReactComponent as Twitters} from '../../assets/icons/Twitter.svg'
import { ReactComponent as Linkedins} from '../../assets/icons/Linkedin.svg'
import { ReactComponent as Unions} from '../../assets/icons/Union.svg'

export const Container = styled.div`
    width: 100%;
`
export const Wrap = styled.div`
    width: 100%;
    height: 236px;
    background: #FBFBFB;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 32px 50px 0 75px;
    border-bottom: 1px solid rgba(70, 163, 88, 0.2);

    @media (max-width: 430px) {
        height: 440px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 32px 50px 0 40px;
        margin-right: 30px;
    }
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
`

export const Paragraph = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    margin-top: 5px;
`
export const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    margin: 20px 0 33px 0;
`
export const Box = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid rgba(70, 163, 88, 0.2);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Info = styled.div`
    width: 100%;
    height: 30px;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;

    @media (max-width: 835px) {
        height: 40px;
    }

    @media (max-width: 430px) {
        height: 40px;
    }
`
export const Facebook = styled(Facebooks)`
`
export const Instagram = styled(Instagrams)`
`
export const Twitter = styled(Twitters)`
`
export const Linkedin = styled(Linkedins)`
`
export const Union = styled(Unions)`
`