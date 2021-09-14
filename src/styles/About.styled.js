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
        max-width: 40%;
        p {
            padding: 1rem 0;
        }
        a {
            text-decoration: none;
            color: white;
        }
    }
    img {
        max-width: 40%;
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export default WrapAbout;
