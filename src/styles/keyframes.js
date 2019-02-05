import { keyframes } from 'styled-components';

export const fade = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

export const fadeUp = keyframes`
0% {
    transform: translateY(40px);
    opacity: 0;
}
100% {
    opacity: 1;
    transform: translateY(0px);
}
`