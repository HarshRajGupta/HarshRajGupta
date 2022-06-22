import { Suspense, memo, lazy } from 'react';
import styled from 'styled-components';

const Background = lazy(() => import('./components/Background'));
const TopBar = lazy(() => import('./components/Topbar'));
const Intro = lazy(() => import('./container/Intro'));
const Portfolio = lazy(() => import('./container/Portfolio'));
const Projects = lazy(() => import('./container/Projects'));

function App() {
    return (
        <Container>
            <Suspense fallback={<div>Loading...</div>}>
                <TopBar />
                <Sections>
                    <Intro />
                    <Portfolio />
                    <Projects />
                </Sections>
                <Background />
            </Suspense>
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
    @media (max-width: 540px) {
        height: calc(100vh - 56px);
        top: 56px;
        > * {
            height: calc(100vh - 56px);
        }
    }
`;

export default memo(App);
