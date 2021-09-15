import WrapSkill from "../styles/Skill.styled";
import codethinking from "../assets/code-thinking.svg";
import { data } from "../data";
import Icon from "./UI/Icon";
import { IconContext } from "react-icons/";

const Skill = () => {
    return (
        <WrapSkill id="skill">
            <img src={codethinking} alt="code-thinking" />
            <div className="diva">
                <h2>My skill</h2>
                <div className="container">
                    {data.map((faa) => (
                        <IconContext.Provider value={{ className: "icon" }}>
                            <Icon family={faa.family} name={faa.name} />
                        </IconContext.Provider>
                    ))}
                </div>
            </div>
        </WrapSkill>
    );
};

export default Skill;
