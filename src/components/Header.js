import { WrapHeader } from "../styles/Header.styled";
import useToggle from "./hooks/useToggle";
import Hamburger from "./UI/Hamburger";

const Header = () => {
    const [toggle, setToggle] = useToggle();
    console.log(toggle);
    return (
        <WrapHeader>
            <h1>Tasim</h1>
            <div>
                <Hamburger toggle={toggle} setToggle={setToggle} />
                <nav className="nav">
                    <ul className={`menu ${toggle ? "active" : ""}`}>
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
            </div>
        </WrapHeader>
    );
};

export default Header;
