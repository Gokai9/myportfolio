import styled from "styled-components";

const WrapAbout = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 1rem;
    height: 100vh;
    background: #3a3478;
    color: white;
    .me {
        width: 40%;
        h2 {
            padding: 1rem 0;
        }
        p {
            padding: 1rem 0;
        }
        a {
            text-decoration: none;
            color: white;
        }
    }
    img {
        width: 40%;
    }
    @media only screen and (max-width: 768px) {
        padding: 6px;
        flex-direction: column;
        height: 100%;

        .me {
            height: 60vh;
            width: 100%;
        }
        img {
            width: 60%;
            height: 40vh;
        }
    }
`;

export default WrapAbout;
