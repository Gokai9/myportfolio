import { WrapButton } from "./Button.styled";

const Button = ({ children, color, bgcolor }) => {
    return (
        <WrapButton color={color} bgcolor={bgcolor}>
            {children}
        </WrapButton>
    );
};

Button.defaultProps = {
    text: "Click",
    color: "black",
    bgcolor: "black"
};
export default Button;
