import Styled from 'styled-components';
import { memo } from 'react';

function hamBurger({ showMenu, setMenu }) {
    const menuList = [
        {
            id: '#intro',
            title: 'home',
        },
        {
            id: '#portfolio',
            title: 'portfolio',
        },
        {
            id: '#projects',
            title: 'projects',
        },
        {
            id: '#contact',
            title: 'contact',
        },
    ];
    return (
        <Container show={showMenu}>
            <Menu>
                {showMenu &&
                    menuList.map((item) => (
                        <Item>
                            <Link href={item.id} onClick={() => setMenu(false)}>
                                {item.title}
                            </Link>
                        </Item>
                    ))}
            </Menu>
        </Container>
    );
}

const Container = Styled.div`
    width: 204px;
    height: calc(100vh - 70px);
    background: url("/images/Hamburger.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    position: fixed;
    top: 70px;
    right: 0;
    color: #fff;
    align-items: center;
    justify-content: space-around;
    transition: all 750ms ease;
    transform: ${(props) =>
        props.show ? 'translateX(0%)' : 'translateX(100%)'};
`;

const Menu = Styled.ul`
    width: 100%;
    grid-gap: 4vh;
    margin-bottom: 2vh;
    padding: 1rem;
    grid-template-columns: auto;
`;

const Item = Styled.li`
    width: max-content;
    margin: 0 auto;
`;

const Link = Styled.a`
    margin: 0 auto;
    width: max-content;
    text-decoration: none;
    font-family: "Zen Kaku Gothic Antique";
    font-size: 30px;
    text-align: center;
    font-weight: 400;
    display: inline-block;
    position: relative;
    transition-delay: 250ms;
    text-transform: capitalize;
    &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 4px;
        bottom: 0px;
        left: 0;
        background-color: transparent;
        transform-origin: bottom right;
        transition: transform 512ms ease-out;
        border-radius: 32px;
        background: linear-gradient(to right, #15023a, #00194f);
    }
    &:hover::after {
        transform: scaleX(1);
        transform-origin: bottom  left;
    }
    &:hover {
        color: #15023a;
        font-weight: 900;
        opacity: 0.75;
        transition-delay: 0s;
    }
    ${(props) =>
        props.active
            ? 'color: #15023a; font-weight: 700; opacity: 0.75; &::after { transform: scaleX(1);}'
            : ''}
`;

export default memo(hamBurger);
