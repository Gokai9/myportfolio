import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextDotJs,
  SiNodeDotJs,
  SiMongodb,
  SiTypescript,
  SiVisualstudiocode,
  SiGo,
} from "react-icons/si";
import WrapSkill from "../styles/Skill.styled";

const Skill = () => {
  return (
    <WrapSkill id="skill">
      <p>Skill and technologies that i used</p>
      <div>
        <h3>Advanced</h3>
        <FaHtml5 />
        <FaCss3Alt />
        <SiJavascript />
        <FaReact />
      </div>
      <div>
        <h3>Intermediate</h3>
        <SiNextDotJs />
        <SiNodeDotJs />
        <FaGithub />
        <SiVisualstudiocode />
        <FaPython />
      </div>
      <div>
        <h3>Beginner</h3>
        <SiGo />
        <SiMongodb />
        <SiTypescript />
      </div>
    </WrapSkill>
  );
};

export default Skill;
