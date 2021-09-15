import WrapAbout from "../styles/About.styled";
import updresume from "../assets/update-resume.svg";
import Button from "./UI/Button";

const About = () => {
    return (
        <WrapAbout id="about">
            <section className="me">
                <h2>Hi, My name is Mu'Tasim Billah a Software Enginering</h2>
                <h4>About me</h4>
                <p>
                    I am from Blitar, i have a strong passion in programming and
                    really like to learn a new technology. i believe if someone
                    else can, i definitely can. Outside my programming activity
                    i use my time to learn a new language from duolingo.
                </p>
                <Button color="#ffc13b" bgcolor="#3a3478">
                    <a
                        href="https://drive.google.com/file/d/1RWgLJRHudqWpDKgtMP4VrWbEIATh2CeN/view?usp=drivesdk"
                        alt="resume"
                    >
                        Resume
                    </a>
                </Button>
            </section>
            <img src={updresume} alt="updresume" />
        </WrapAbout>
    );
};

export default About;
