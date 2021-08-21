import styled from "styled-components";

const WrapSkill = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  .icon {
    font-size: 2rem;
    margin: 1rem;
  }
  .icon:hover {
    color: blue;
  }
`;

export default WrapSkill;
