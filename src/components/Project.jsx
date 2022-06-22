import { memo } from 'react';
import styled from 'styled-components';

function Project() {
    const d = {
        id: '3',
        icon: '/images/writing.png',
        title: 'Branding',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
    };
    return (
        <Container>
            <Item>
                <Left>
                    <LeftContainer>
                        <IconContainer>
                            <Icon src={d.icon} alt="" />
                        </IconContainer>
                        <h2>{d.title}</h2>
                        <p>{d.desc}</p>
                        <span>Projects</span>
                    </LeftContainer>
                </Left>
                <Right>
                    <Image
                        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                        alt=""
                    />
                </Right>
            </Item>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    /* height: calc(100vh - 70px); */
    display: flex;
    align-items: center;
    justify-content: center;
    * {
        overflow: hidden !important;
    }
`;

const Item = styled.div`
    width: 700px;
    height: 350px;
    background-color: white;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Left = styled.div`
    flex: 4;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LeftContainer = styled.div`
    width: 90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
        font-size: 20px;
    }
    p {
        font-size: 13px;
        max-width: 100%;
    }
    span {
        font-size: 12px;
        font-weight: 600;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const IconContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(245, 179, 155);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.img`
    width: 25px;
`;

const Right = styled.div`
    flex: 8;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const Image = styled.img`
    width: 400px;
    transform: rotate(-10deg);
`;

export default memo(Project);
