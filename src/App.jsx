import { memo } from "react";
import styled from "styled-components";

function App() {
  return <Container>Hello World</Container>;
}

const Container = styled.div``;

export default memo(App);
