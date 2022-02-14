import styles from "../styles/Skill.module.css";
import { skill } from "../data";

const Skill = () => {
    return (
        <div className={styles.container}>
            <div className={styles.diva}>
                <h2>My skill</h2>
                <div className={styles.contain}>
                    {skill.map((faa, i) => (
                        <div key={i} className={styles.box}>
                            <h3>{faa}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;
