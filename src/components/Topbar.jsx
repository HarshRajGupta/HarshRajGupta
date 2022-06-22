import { useState, memo } from 'react';
import Styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import Hamburger from './Hamburger';

function TopBar({ message, setMessage }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Container className={(menuOpen && 'active')}>
            <Hamburger showMenu={menuOpen} setMenu={setMenuOpen} />
            <Wrap>
                <LeftBar>
                    <MyName href="#intro">harsh.</MyName>
                    <Item>
                        <PersonIcon />
                        <ItemText
                            onClick={() => {
                                navigator.clipboard.writeText('+917607642202');
                                const temp = [
                                    ...message,
                                    '+917607642202 has been copied to clipboard',
                                ];
                                setMessage(temp);
                            }}
                        >
                            +91 7607642202
                        </ItemText>
                    </Item>
                    <Item>
                        <EmailIcon />
                        <ItemText
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    '1amHarsh.RG@gmail.com'
                                );
                                const temp = [
                                    ...message,
                                    '1amHarsh.RG@gmail.com has been copied to clipboard',
                                ];
                                setMessage(temp);
                            }}
                        >
                            1amHarsh.RG@gmail.com
                        </ItemText>
                    </Item>
                </LeftBar>
                <RightBar>
                    <HamBurger
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={(menuOpen && 'active')}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </HamBurger>
                </RightBar>
            </Wrap>
        </Container>
    );
}

const Wrap = Styled.div`
    width: 100%;
    padding: 10px 30px;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto auto;
`;

const LeftBar = Styled.div`
    grid-template-columns: auto auto auto;
    align-items: center;
    grid-gap: 70px;
    @media (max-width: 1280px) {
        grid-template-columns: auto
    }
`;

const MyName = Styled.a`
    font-size: 42px;
    font-weight: 600;
    text-decoration: none;
    font-family: Poppins;
    @media (max-width: 540px) {
        font-size: 24px;
    }
`;
const Item = Styled.div`
    grid-template-columns: auto auto;
    grid-gap: 8px;
    align-items: center;
    cursor: default;
    @media (max-width: 1280px) {
        display: none;
    }
`;
const ItemText = Styled.div`
    font-family: Poppins;
    font-size: 14px;
    font-weight: 600;
`;
const RightBar = Styled.div`
`;

const HamBurger = Styled.div`
    width: 25px;
    grid-gap: 1.4px;
    height: 18px;
    cursor: pointer;
    overflow: hidden;
    align-items: center;
    span {
        width: 100%;
        height: 2.5px;
        background-color: #15023a;
        transform-origin: right;
        transition: all 1.5s ease;
        border-radius: 256px;
    }
    &.active {
        height: 32px; 
        grid-gap: 1px; 
        span { 
            &:first-child { 
                background-color: #fff; 
                transform: rotate(-45deg);
            } 
            &:nth-child(2) {
                display: none;
            } 
            &:last-child {
                background-color: #fff; 
                transform: rotate(45deg);
            }
        }
    }
`;

const Container = Styled.div`
    width: 100vw;
    height: 70px;
    position: fixed; 
    top: 0;
    z-index: 5;
    transition: all 0.5s ease-in-out;
    transform: width 0s, height 0s;
    color: #15023a; 
    &.active {
        color: #fff; 
        background: #15023a;
    }
    @media (max-width: 540px) {
        height: 56px;
    }
`;

export default memo(TopBar);
