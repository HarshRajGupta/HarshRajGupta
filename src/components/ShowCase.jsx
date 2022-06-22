import { memo, Suspense} from 'react';
import Styled from 'styled-components';
import { FeaturedPosts, AchievementPosts, CertificatePosts } from '../data';

// const { FeaturedPosts, AchievementPosts, CertificatePosts } = lazy(() => import("../data"));

function ShowCase({ selector, setSelector }) {
    var Data = [];
    switch (selector) {
        case 'featured':
            Data = FeaturedPosts;
            break;
        case 'achievements':
            Data = AchievementPosts;
            break;
        case 'certifications':
            Data = CertificatePosts;
            break;
        default:
            Data = FeaturedPosts;
            setSelector('featured');
            break;
    }
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ItemContainer>
                {Data.map((item) => (
                    <Item
                        key={item.id}
                        bgColor={
                            '#' +
                            Math.floor(Math.random() * 16777215).toString(16)
                        }
                    >
                        <Image src={item.image} alt={item.title}></Image>
                        <h1>{item.title}</h1>
                    </Item>
                ))}
            </ItemContainer>
        </Suspense>
    );
}

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

export default memo(ShowCase);
