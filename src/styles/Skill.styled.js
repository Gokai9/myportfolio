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
        display: block;
        padding: 1rem;
        width: 40%;
        .icon {
            font-size: 3rem;
            padding: 1rem, 0;
        }
    }
`;

export default WrapSkill;
