import WrapContact from "../styles/Contact.styled";
import Button from "./UI/Button";
import code from "../assets/code.svg";

const Contact = () => {
    return (
        <WrapContact id="contact">
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
            <img src={code} alt="code" />
        </WrapContact>
    );
};

export default Contact;
