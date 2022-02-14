import styles from "../styles/Header.module.css";
import useToggle from "./hooks/useToggle";
import Hamburger from "./UI/Hamburger";

const Header = () => {
    const [toggle, setToggle] = useToggle();
    return (
        <div className={styles.container}>
            <h1>Tasim</h1>
            <div>
                <Hamburger toggle={toggle} setToggle={setToggle} />
                <ul className={` ${toggle ? styles.active : styles.menu}`}>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#project">Project</a>
                    </li>
                    <li>
                        <a href="#skill">Skill</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
