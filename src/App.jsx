import { memo } from 'react';
import styled from 'styled-components';
import Background from './components/Background';
import TopBar from './components/Topbar';

function App() {
    return (
        <Container>
            <TopBar />
            <Background />
        </Container>
    );
}

const Container = styled.div``;

export default memo(App);
