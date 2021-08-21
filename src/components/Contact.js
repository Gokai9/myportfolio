import WrapContact from "../styles/Contact.styled";

const Contact = () => {
  return (
    <WrapContact id="contact">
      <h2>Contact Me</h2>
      <p>Want to contact me? You can click button below!</p>
      <button className="btn">
        <a href={"mailto:tasim.dev@gmail.com"}>Contact Me from Email</a>
      </button>
      <button className="btn">
        <a href={"https://wa.me/+6285655051763"}>Contact Me from WA</a>
      </button>
    </WrapContact>
  );
};

export default Contact;
