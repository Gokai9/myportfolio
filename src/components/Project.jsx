import { projects } from "../data";
import styles from "../styles/Project.module.css";

const Project = () => {
    return (
        <div className={styles.container}>
            {projects.map((project) => (
                <div key={project.id} className={styles.wrapper}>
                    <img
                        src={project.screenshot}
                        alt={project.name}
                        className={styles.img}
                    />
                    <div className={styles.des}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                        <div>
                            <a
                                className={styles.link}
                                href={project.sourcecode}
                            >
                                Source Code
                            </a>

                            <a className={styles.link} href={project.site}>
                                Live demo
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;
