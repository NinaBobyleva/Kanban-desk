import styled from "styled-components";
import { Hover1, Hover2 } from "../../globalStyle.styled";
import { Link } from "react-router-dom";

export const Header = styled.div`
    width: 100%;
    margin: 0 auto;
    background-color: ${props => props.theme.bgHeadMod};
`;

export const HeaderBlock = styled.div`
    height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`;

export const HeaderLogoLight = styled.div`
    display: ${({theme}) => theme.isDark ? "none" : "block"};
    img {
        width: 85px;
    }
`;

export const HeaderLogoDark = styled.div`
display: ${({theme}) => theme.isDark ? "block" : "none"};
    img {
        width: 85px;
    }
`;

export const HeaderNav = styled.div`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderBtnMainNew = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;color: #FFFFFF;
    ${Hover1}
    @media screen and (max-width: 495px) {
        z-index: 3;
        position: fixed;
        left: 16px;
        bottom: 30px;
        top: auto;
        width: calc(100vw - 32px);
        height: 40px;
        border-radius: 4px;
        margin-right: 0;
    }
`;

export const HeaderBtnMainNewA = styled(Link)`
    color: #FFFFFF;
`;

export const HeaderUser = styled.a`
    height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.headUs};
    &::after {
        content: "";
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 1px;
        border-left: 1.9px solid ${props => props.theme.headUs};
        border-bottom: 1.9px solid ${props => props.theme.headUs};
        transform: rotate(-45deg);
        margin: -6px 0 0 5px;
        padding: 0;
    }
    &:hover {
        color: #33399b;
        &::after {
            border-left-color: #33399b;
            border-bottom-color: #33399b;
        }
    }
    ${Hover2}
`;