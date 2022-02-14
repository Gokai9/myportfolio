import styles from "../styles/About.module.css";
import Button from "./UI/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Hi, My name is Mu'Tasim Billah a Fullstack Developer
            </h2>
            <section className={styles.about}>
                <h1>About me</h1>
                <p>
                    I am from Blitar, i am expertise in both react and golang
                    also i had a good understanding in vue and node js. Also i
                    can make an api insert data to database with postgressql or
                    mongodb and display data to react or vue.
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
        </div>
    );
};

export default About;
