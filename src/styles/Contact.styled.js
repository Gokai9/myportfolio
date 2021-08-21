import styled from "styled-components";

const WrapContact = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  height: 100vh;
  .btn {
    margin-right: 1rem;
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
