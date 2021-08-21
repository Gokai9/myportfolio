import styled from "styled-components";

export const WrapHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: teal;
  padding: 2rem 1rem;
  nav ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  nav ul li {
    list-style: none;
    padding-right: 1rem;
  }
  nav ul li a {
    text-decoration: none;
    color: white;
    padding: 1rem;
  }
  nav ul li a:hover {
    color: black;
    background: green;
    border-radius: 8px;
  }
`;
