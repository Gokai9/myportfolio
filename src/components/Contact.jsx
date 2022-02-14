import styles from "../styles/Contact.module.css";
import Button from "./UI/Button";

const Contact = () => {
    return (
        <div className={styles.container}>
            <section>
                <h2>Contact Me</h2>
                <p>Want to contact me? You can click button below!</p>
                <Button bgcolor="#36d7eb" color="#1868ae">
                    <a href={"mailto:tasim.dev@gmail.com"}>
                        Contact Me from Email
                    </a>
                </Button>
                <Button bgcolor="#408ec6" color="#7a2048">
                    <a href={"https://wa.me/+6285655051763"}>
                        Contact Me from WA
                    </a>
                </Button>
            </section>
        </div>
    );
};

export default Contact;
