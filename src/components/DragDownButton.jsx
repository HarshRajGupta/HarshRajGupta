import { memo } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styled from 'styled-components';

function DragDownButton({ link }) {
    return (
        <Link href={link}>
            <KeyboardArrowDownIcon
                sx={{
                    width: 64,
                    height: 64,
                    animation: 'BottomUpDown 1.5s 0s infinite',
                }}
            />
        </Link>
    );
}
const Link = styled.a`
    align-items: center;
    position: absolute;
    height: 64px;
    bottom: 0px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    @keyframes BottomUpDown {
        0% {
            bottom: 0;
        }
        50% {
            bottom: 20px;
        }
        100% {
            bottom: 0;
        }
    }
    margin: 0 calc(50% - 32px);
`;
export default memo(DragDownButton);
