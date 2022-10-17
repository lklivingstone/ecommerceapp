import { keyframes } from "@emotion/react";

export const slideTop = keyframes`
    0% {
        -webkit-transform: translateY(0);
            transform: translateY(0);
            opacity: 0;
    }
    100% {
        -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
            opacity: 0;
    }
`;

export const slideLeft= keyframes`
0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
            opacity: 0;
  }
  100% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
            opacity: 1;
  }
`
export const ScaleUpCenter= keyframes`
0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(1.1);
            transform: scale(1.1);
  }
`

export const ScaleDownCenter= keyframes`
0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    -webkit-transform: scale(0.8);
            transform: scale(0.8);
  }
`;