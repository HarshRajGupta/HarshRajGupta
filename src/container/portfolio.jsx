import Styled from 'styled-components';
import { useState, memo } from 'react';
import ShowCase from "../components/ShowCase"

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

function Portfolio() {
    const [selected, setSelected] = useState('featured');
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
            <ShowCase selector={selected} setSelector={setSelected} />
        </Container>
    );
}

const Container = Styled.div`
    width: 100vw;
    display: block;
    * {
        overflow: hidden !important;
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
      font-size: 14px;
    }  
    margin: 0 auto;
`;

export default memo(Portfolio);
