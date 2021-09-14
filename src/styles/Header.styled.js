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
    .menu {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .menu li {
        list-style: none;
        padding-right: 1rem;
    }
    .menu li a {
        text-decoration: none;
        color: white;
        padding: 1rem;
    }
    .menu li a:hover {
        color: black;
        border-bottom: 2px solid greenyellow;
    }
    @media only screen and (max-width: 768px) {
        .menu {
            position: absolute;
            left: -100%;
            width: 100%;
            top: 5rem;
            flex-direction: column;
            background: gray;
            transition: 0.3s;
            padding: 1rem 0;
        }
        .menu li {
            padding: 1rem 0;
        }
        .menu.active {
            left: 0;
        }
    }
`;
