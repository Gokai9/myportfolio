import styles from "../styles/Skill.module.css";
import { skill } from "../data";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};
export const Skill = () => {
    return (
        <div className={styles.container}>
            <div className={styles.diva}>
                <h2>My skill</h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className={styles.contain}
                >
                    {skill.map((faa, i) => (
                        <motion.div
                            variants={item}
                            key={i}
                            className={styles.box}
                        >
                            <h3>{faa}</h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
