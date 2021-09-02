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
        a {
            text-decoration: none;
            color: white;
        }
    }
    img {
        width: 40%;
    }
`;

export default WrapContact;
