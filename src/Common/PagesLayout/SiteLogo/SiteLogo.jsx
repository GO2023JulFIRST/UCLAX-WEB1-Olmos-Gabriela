import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./Web1LogoF15.jpg";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Accessibility Conference Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
