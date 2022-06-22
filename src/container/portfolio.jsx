import Styled from 'styled-components';
import { useState, useEffect, memo } from 'react';
import { FeaturedPosts, AchievementPosts, CertificatePosts } from '../data';

function Portfolio() {
    const [selected, setSelected] = useState('featured');
    const [data, setData] = useState(FeaturedPosts);
    const list = [
        {
            id: 'featured',
            title: 'featured',
        },
        {
            id: 'achievements',
            title: 'achievements',
        },
        {
            id: 'certifications',
            title: 'certifications',
        },
        {
            id: 'skills',
            title: 'skills',
        },
        {
            id: 'languages',
            title: 'languages',
        },
        {
            id: 'projects',
            title: 'projects',
        },
    ];
    useEffect(() => {
        switch (selected) {
            case 'featured':
                setData(FeaturedPosts);
                break;
            case 'achievements':
                setData(AchievementPosts);
                break;
            case 'certifications':
                setData(CertificatePosts);
                break;
            default:
                setSelected('featured');
                break;
        }
    }, [selected]);
    return (
        <Container id={'portfolio'}>
            <PageHeading>Portfolio</PageHeading>
            <Tabs>
                {list.map((item) => (
                    <Tab
                        id={item.id}
                        className={item.id === selected ? 'active' : ''}
                        onClick={() => {
                            setSelected(item.id);
                        }}
                        key={item.id}
                    >
                        {item.title}
                    </Tab>
                ))}
            </Tabs>
            <ItemContainer>
                {data.map((item) => (
                    <Item
                        key={item.id}
                        bgColor={'#' + Math.floor(Math.random() * 16777215).toString(
                            16
                        )}
                    >
                        <Image src={item.image}></Image>
                        <h1>{item.title}</h1>
                    </Item>
                ))}
            </ItemContainer>
        </Container>
    );
}

const Container = Styled.div`
    width: 100vw;
    display: block;
    * {
        overflow: hidden;
    }
`;
const PageHeading = Styled.div`
    font-size: 64px;
    font-family:  Poppins;
    margin: 0 auto;
    margin-bottom: 16px;
    font-weight: 500;
    display: block;
    color: lightgreen;
    &::before {
        content: "My ";
        font-family: cursive;
        color: #15023a;
        font-weight: 400;
    }
    @media (max-width: 540px) {
        font-size: 32px;
    }
`;

const Tabs = Styled.ul`
    grid-template-columns: auto auto auto auto auto auto;
    margin: 0 auto;
    margin-bottom: 18px;
    width: 69vw;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 768px) {
        width: 85vw;
    }
    @media (max-width: 540px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

const Tab = Styled.li`
    font-size: 16px;
    padding: 7px;
    border-radius: 10px;
    text-transform: capitalize;
    font-weight: 600;
    cursor: pointer;
    height: max-content;
    transition: all 0.25s 0s ease;
    transform: scale(0.9);
    &.active {
        color: #fff;
        background-color: #15023a;
        transition: all 0.5s 0.5s ease;
        transform: scale(1);
    }
    @media (max-width: 540px) {
      font-size: 12px;
    }  
    margin: 0 auto;
`;

const ItemContainer = Styled.div`
    margin: 0 auto;
    grid-template-columns: auto auto auto;
    grid-gap: 16px 128px;
    height: max-content;
    justify-content: center;
    width: 100%;
    @media (max-width: 1280px) {
        grid-gap: 8px 32px;
        grid-template-columns: auto auto;
    }
`;

const Item = Styled.div`
    width: 200px;
    height: 120px;
    margin: 0.5rem auto;
    align-items: center;
    transition: all 5s 5s ease-in-out;
    transition: width 0, height 0;
    background: ${(props) => props.bgColor};
    h1 {
        width: 100%;
        font-size: 18px;
        text-align: center;
        font-family:  cursive;
        font-weight: 500;
        position: absolute;
        opacity: 0;
        height: 100%;
        align-items: center;
        background-color: rgba(21, 2, 58, 0.69);
        color: #fff;
        cursor: pointer;
        transition: all 0.1s 0.4s ease-in-out;
    }
    border-radius: 16px;
    &:hover {
        h1 {
            opacity: 1;
            transition: all 0.4s 0.1s ease-in-out;
            transform: scale(1.5);
        }
    }
    @media (max-width: 1280px) {
        width: 35vw;
        height: 18vw;
    }
    overflow: hidden;
`;
const Image = Styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export default memo(Portfolio);
