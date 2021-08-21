import styled from "styled-components";

const WrapContact = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 2rem 1rem;
  height: 80vh;
  border-top: 1px solid black;
  .btn {
    margin: 1rem;
    padding: 1rem;
    border: none;
    background: green;
    color: white;
  }
  .btn:hover {
    background: blue;
  }
  .btn a {
    text-decoration: none;
    color: white;
  }
`;

export default WrapContact;
