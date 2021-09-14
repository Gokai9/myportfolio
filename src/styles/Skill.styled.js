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
    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 1rem;
        width: 40%;
        .icon {
            font-size: 3rem;
            padding: 1rem, 0;
        }
    }
    .icon {
        display: grid;
        grid-template-columns: 1fr 1fr 1frs;
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        img {
            width: 80%;
            height: 100vh;
        }
    }
`;

export default WrapSkill;
