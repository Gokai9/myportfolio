import styled from "styled-components";

export const WrapHeader = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #3a3478;
    padding: 2rem 1rem;
    h1 {
        font-family: "Zen Tokyo Zoo", cursive;
    }
    nav ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    nav ul li {
        list-style: none;
        padding-right: 1rem;
    }
    nav ul li a {
        text-decoration: none;
        color: white;
        padding: 1rem;
    }
    nav ul li a:hover {
        color: black;
        border-bottom: 2px solid greenyellow;
    }
`;
