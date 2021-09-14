import styled from "styled-components";

const Hambur = styled.div`
    .hamburger {
        display: none;
    }
    .bar {
        display: block;
        width: 25px;
        height: 3px;
        margin: 5px auto;
        background: red;
        transition: all 0.3s ease-in-out;
    }
    @media only screen and (max-width: 768px) {
        .hamburger {
            display: block;
            cursor: pointer;
        }
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    }
`;

const Hamburger = ({ toggle, setToggle }) => {
    return (
        <Hambur>
            <div
                className={`hamburger ${toggle ? "active" : ""}`}
                onClick={setToggle}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </Hambur>
    );
};

export default Hamburger;
