import { memo } from 'react';
import styled from 'styled-components';
import Background from './components/Background';
import TopBar from './components/Topbar';
import Intro from './container/Intro';
import Portfolio from './container/portfolio';

function App() {
    return (
        <Container>
            <TopBar />
            <Sections>
                <Intro />
                <Portfolio />
            </Sections>
            <Background backGroundColor="#000" />
        </Container>
    );
}

const Container = styled.div`
    height: 100vh;
`;

const Sections = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    position: relative;
    top: 70px;
    overflow-y: scroll;

    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }

    > * {
        width: 100vw;
        height: calc(100vh - 70px);
    }
    scroll-snap-type: y mandatory;
`;

export default memo(App);
