import styled from "styled-components";
import React from "react";
import * as FontAwesomeIcons from "react-icons/fa";
import * as SimpleIcons from "react-icons/si";

const iconFamilies = {
    FontAwesome: FontAwesomeIcons,
    SimpleIcons
};

const StyledIcon = styled(({ family, name }) =>
    React.createElement(iconFamilies[family][name])
)`
    padding: 2rem;
`;

const Icon = ({ family, name }) => <StyledIcon family={family} name={name} />;

export default Icon;
