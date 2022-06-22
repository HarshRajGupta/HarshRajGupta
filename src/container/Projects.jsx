import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Keyboard, Pagination, Navigation } from 'swiper';
import Project from "../components/Project"
import Styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Projects() {
    SwiperCore.use([Autoplay, Keyboard]);
    return (
        <Container>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                keyboard={{
                    enabled: true,
                }}
                autoplay={{
                    delay: 5000,
                }}
                loop={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>slide 1</SwiperSlide>
                <SwiperSlide>slide 2</SwiperSlide>
                <SwiperSlide>slide 3</SwiperSlide>
                <SwiperSlide>slide 4</SwiperSlide>
                <SwiperSlide>slide 5</SwiperSlide>
                <SwiperSlide>slide 6</SwiperSlide>
                <SwiperSlide>slide 7</SwiperSlide>
                <SwiperSlide>
                    <Project/>
                </SwiperSlide>
            </Swiper>
        </Container>
    );
}

const Container = Styled.div`
    * {
        overflow: visible;
        max-width: 100vw;
        max-height: calc(100vh - 70px);
    }
    width:100%;
    height: calc(100vh - 70px);
    position: relative;
    top:70px;
    overflow: hidden;
    background: url('/images/tk.jpg');
    background-size: contain;
`;

export default memo(Projects);
