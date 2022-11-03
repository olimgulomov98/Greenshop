import styled from "styled-components";
import { ReactComponent as Logos} from '../../../assets/icons/Logo.svg';
import { ReactComponent as Locations} from '../../../assets/icons/Location.svg';
import { ReactComponent as Messages} from '../../../assets/icons/Message.svg';
import { ReactComponent as Callings} from '../../../assets/icons/Calling.svg';

export const Container = styled.div`
    width: 100%;
    height: 88px;
    background: rgba(70, 163, 88, 0.1);
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid var(--green);
    border-bottom: 1px solid var(--green);

    @media (max-width: 430px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        place-items: center;
        height: 262px;
        padding: 20px 0;
    }
`
export const Wrapper = styled.div`
    display: flex;
`
Wrapper.Title = styled.h1`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-left: 12px;
`
export const Logo = styled(Logos)`
`
export const Location = styled(Locations)`
    margin-top: 12px;
`
export const Message = styled(Messages)`
`
export const Calling = styled(Callings)`
`