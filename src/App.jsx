import { memo } from 'react';
import styled from 'styled-components';
import Background from './components/Background';
import TopBar from './components/Topbar';
import Intro from './container/Intro';

function App() {
    return (
        <Container>
            <TopBar />
            <Sections>
                <Intro />
            </Sections>
            <Background backGroundColor="#000"/>
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
    /* background: #15023a; */
    /* color: white; */
`;

const Sections = styled.main`
    width: 100vw;
    height: calc(100vh - 70px);
    top: 70px;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    scrollbar-width: none; //for firefox
    &::-webkit-scrollbar {
        display: none;
    }
    scroll-snap-align: start;
`;

export default memo(App);
