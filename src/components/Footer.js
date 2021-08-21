import * as Fa from "react-icons/fa";
import { IconContext } from "react-icons";
import { WrapFooter } from "../styles/Footer.styled";

const Footer = () => {
  return (
    <WrapFooter>
      <ul>
        <IconContext.Provider
          value={{ style: { fontSize: "30px", color: "white" } }}
        >
          <li>
            <a href={"https://twitter.com/miramichi88"}>
              <Fa.FaTwitterSquare />
            </a>
          </li>
          <li>
            <a href={"https://github.com/tasim-blh"}>
              <Fa.FaGithubSquare />
            </a>
          </li>
          <li>
            <a href={"http://www.linkedin.com/in/mu-tasim-billah-0b2701209"}>
              <Fa.FaLinkedin />
            </a>
          </li>
        </IconContext.Provider>
      </ul>

      <p className="foot">&copy;2021 - Made in Indonesia</p>
    </WrapFooter>
  );
};

export default Footer;
