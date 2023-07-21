import styled from "styled-components";

/* Components ---------------------------*/
import MediumLarge from "./MediumLarge";
import Small from "./Small";

const Header = () => {
    return (
        <HeaderStyled className="Header">
            <MediumLarge />
            <Small />
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header``;
