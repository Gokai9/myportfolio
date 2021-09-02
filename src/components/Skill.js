import WrapSkill from "../styles/Skill.styled";
import codethinking from "../assets/code-thinking.svg";
import { data } from "../data";
import Icon from "./UI/Icon";

const Skill = () => {
    return (
        <WrapSkill id="skill">
            <img src={codethinking} alt="code-thinking" />
            <div>
                <h2>My skill</h2>
                <div className="icon">
                    {data.map((faa) => (
                        <Icon family={faa.family} name={faa.name} />
                    ))}
                </div>
            </div>
        </WrapSkill>
    );
};

export default Skill;
