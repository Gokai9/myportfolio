import styled from "styled-components";

const WrapSkill = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    background-color: #f5f0e1;
    img {
        width: 40%;
    }
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 1rem 0;
        width: 40%;
    }
    .icon {
        margin: 10px 10px 10px 0;
        font-size: 42px;
        color: blue;
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        height: 100%;
        img {
            padding: 8px;
            width: 80%;
            height: 50vh;
        }
        .diva {
            height: 50vh;
            margin: 8px;
        }
        .container {
            width: 100%;
        }
    }
`;

export default WrapSkill;
