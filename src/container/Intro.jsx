import { memo } from 'react';
import Styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import DragDownButton from '../components/DragDownButton';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

function Intro() {
    return (
        <Container id="intro">
            <Left>
                <ImageContainer>
                    <Zoom ssrFadeout>
                        <Image src="https://user-images.githubusercontent.com/85221003/156927272-0c54db85-436c-4e95-b0b9-9959978a1f5d.gif" />
                    </Zoom>
                </ImageContainer>
            </Left>
            <Right>
                <Fade right big>
                    <Wrap>
                        <LineOne>Hi There, I'm</LineOne>
                        <LineTwo>Harsh Raj Gupta</LineTwo>
                        <LineThree>
                            <span>
                                <Typewriter
                                    options={{
                                        strings: [
                                            'Competitive Programmer',
                                            'MERN Stack Developer',
                                        ],
                                        autoStart: true,
                                        loop: true,
                                        pauseFor: 2000,
                                        cursorClassName: 'blinkingCursor',
                                    }}
                                />
                            </span>
                        </LineThree>
                    </Wrap>
                </Fade>
            </Right>
            <DragDownButton link="#portfolio" />
        </Container>
    );
}
const Container = Styled.main`
    grid-template-columns: auto auto;
    justify-content: center;
    @media (max-width: 1280px) {
        grid-template-columns: auto
    }
`;

const Left = Styled.div`
    align-items: center;
    overflow: hidden;
`;

const ImageContainer = Styled.div`
    max-height: 120vh;
    height: 120vh;
    width: 60vw;
    /* background: url("/Images/imageBG.jpg"); */
    background-color: #82c5f8;
    background-size: contain;
    border-radius: 50%;
    align-items: center;
    @media (max-width: 1280px) {
        height: max-content;
        width: 100vw;
        align-items: center;
    }
`;

const Image = Styled.img`
    /* height: calc(100vh - 70px); */
    height: auto;
    width: 100%;
    object-fit: cover;
    @media (max-width: 1280px) {
        width: 100vw;
    }
`;

const Right = Styled.div`
    justify-content: center;
    align-items: center;
    padding: 50px;
    @media (max-width: 1280px) {
        width: 100vw;
    }
`;

const Wrap = Styled.ul`
    height: max-content;
    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    @media (max-width: 1280px) {
        padding: 0.8rem;
        text-align: center;
    }
`;

const LineOne = Styled.li`
    font-family: Montserrat;
    font-size: 24px;
    @media (max-width: 1280px) {
        margin: 0 auto;
    }
`;

const LineTwo = Styled.li`
    font-family:  Poppins;
    font-size: 64px;
    margin: 10px 0;
    font-weight: 500;
    cursor: none;
    width: 100%;
`;

const LineThree = Styled.li`
    width: 360px;
    @media (max-width: 1280px) {
        margin: 0 auto;
    }
    * {
        font-size: 32px;
        display: inline;
    }
    span {
        color: crimson;
        &.blinkingCursor {
            @keyframes typingCursor {
                0% { opacity: 1 }
                50% { opacity: 0 }
                100% { opacity: 1 }
            }
            font-family: "Zen Kaku Gothic Antique";
            font-size: 35px;
            animation: typingCursor 1s 0ms infinite step-end;
            color: #15023a;
            font-weight: 400;
        }
    }
`;

export default memo(Intro);
