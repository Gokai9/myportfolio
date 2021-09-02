import styled from "styled-components";

export const WrapButton = styled.button`
    border: 2px solid black;
    padding: 0.6rem 1rem;
    background: ${(props) => props.bgcolor};
    cursor: pointer;
    &:hover {
        background-color: ${(props) => props.color};
    }
`;
