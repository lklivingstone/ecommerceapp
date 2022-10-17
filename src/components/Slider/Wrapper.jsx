import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
