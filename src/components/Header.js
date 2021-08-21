import { FaEarlybirds } from "react-icons/fa";
import { WrapHeader } from "../styles/Header.styled";

const Header = () => {
  return (
    <WrapHeader>
      <h1>
        <FaEarlybirds />
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </WrapHeader>
  );
};

export default Header;
