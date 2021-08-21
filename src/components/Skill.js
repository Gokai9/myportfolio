import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import { IconContext } from "react-icons";
import WrapSkill from "../styles/Skill.styled";

const Skill = () => {
  return (
    <WrapSkill id="skill">
      <h3>Skill and technologies that i used</h3>
      <div>
        <h3>Advanced</h3>
        <IconContext.Provider value={{ className: "icon" }}>
          <Fa.FaHtml5 />
          <Fa.FaCss3Alt />
          <Si.SiJavascript />
          <Fa.FaReact />
        </IconContext.Provider>
      </div>
      <div>
        <h3>Intermediate</h3>
        <IconContext.Provider value={{ className: "icon" }}>
          <Si.SiNextDotJs />
          <Si.SiNodeDotJs />
          <Fa.FaGithub />
          <Si.SiVisualstudiocode />
          <Fa.FaPython />
        </IconContext.Provider>
      </div>
      <div>
        <h3>Beginner</h3>
        <IconContext.Provider value={{ className: "icon" }}>
          <Si.SiGo />
          <Si.SiMongodb />
          <Si.SiTypescript />
        </IconContext.Provider>
      </div>
    </WrapSkill>
  );
};

export default Skill;
