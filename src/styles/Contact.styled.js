import styled from "styled-components";

const WrapContact = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 1rem;
    background-color: #1e3d59;
    section {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        padding: 2rem 1rem;
        height: 80vh;
        width: 40%;
        color: whitesmoke;
        a {
            text-decoration: none;
            color: white;
        }
    }
    img {
        width: 40%;
    }
    @media only screen and (max-width: 768px) {
        flex-direction: column;
        section {
            width: 100%;
            height: 60vh;
        }
        img {
            width: 100%;
            height: 60vh;
        }
    }
`;

export default WrapContact;
