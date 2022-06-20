import { useState, memo } from 'react';
import Styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import HamburgerMenu from './Hamburger'

function TopBar({ message, setMessage }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Container menu={menuOpen}>
            <HamburgerMenu showMenu={menuOpen} setMenu={setMenuOpen} />
            <Wrap>
                <LeftBar>
                    <HyperLink href="#intro">harsh.</HyperLink>
                    <ItemContainer>
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
                    </ItemContainer>
                    <ItemContainer>
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
                    </ItemContainer>
                </LeftBar>
                <RightBar>
                    <HamBurger
                        onClick={() => setMenuOpen(!menuOpen)}
                        menu={menuOpen}
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
    width:100%;
    padding: 10px 30px;
    align-items: center;
    justify-content: space-between;
    grid-template-columns: auto auto;
`;

const LeftBar = Styled.div`
    grid-template-columns: auto auto auto;
    align-items: center;
    grid-gap: 70px;
`;

const HyperLink = Styled.a`
    font-size: 44px;
    font-weight: 600;
    text-decoration: none;
    font-family: Poppins;
`;
const ItemContainer = Styled.div`
    grid-template-columns: auto auto;
    grid-gap: 8px;
    align-items: center;
    cursor: default;
`;
const ItemText = Styled.div`
    font-family: Poppins, Roboto;
    font-size: 14px;
    font-weight: 600;
`;
const RightBar = Styled.div`
    width: 100%;
`;

const HamBurger = Styled.div`
    width: 25px;
    grid-gap: 1.4px;
    height: 18px;
    cursor: pointer;
    overflow: hidden;
    span {
        width: 100%;
        height: 2.5px;
        background-color: #15023a;
        transform-origin: right;
        transition: all 1.5s ease;
        border-radius: 256px;
    }
    ${(props) =>
        props.menu
            ? 'height: 32px; grid-gap: 1px; span { &:first-child { background-color: #fff; transform: rotate(-45deg);} &:nth-child(2) {opacity: 0;} &:last-child {background-color: #fff; transform: rotate(45deg);}}'
            : ''};
`;

const Container = Styled.div`
    width: 100vw;
    height: 70px;
    position: fixed; 
    top: 0;
    z-index: 5;
    transition: all 1s ease-in-out;
    background-color: #fff;
    ${(props) =>
        props.menu
            ? 'color: #fff; background: linear-gradient(45deg, #15023a, #00194f, #15023a)'
            : 'color: #15023a; background: #fff;'};
`;

export default memo(TopBar);
