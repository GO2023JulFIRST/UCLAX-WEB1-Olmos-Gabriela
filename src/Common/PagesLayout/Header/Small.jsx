import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* Components ---------------------------*/
import SiteLogo from "../SiteLogo/SiteLogo.jsx";

const Small = () => {
    return (
        <SmallStyled className="Small">
            <SiteLogo />
            HAMBURGER
            <nav className="mainMenu">
                <NavLink to={"/"} end>
                    Home
                </NavLink>
                <NavLink to={"/staff"}>Staff</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/course-work"}>Course</NavLink>
            </nav>
        </SmallStyled>
    );
};

export default Small;

const SmallStyled = styled.div`
    color: white;
`;
