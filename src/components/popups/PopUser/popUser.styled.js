import styled from "styled-components";
import { Link } from "react-router-dom";
import { Hover3 } from "../../../globalStyle.styled";

export const HeaderPopUserSet = styled.div`
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: ${props => props.theme.bgHeadMod};
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;
`;

export const PopUserSet = styled.header`
    &:target {
        display: block;
    }
`;

export const Button = styled.button`
    width: 72px;
    height: 30px;
    background: transparent;
    color: ${props => props.theme.btnColor};
    border-radius: 4px;
    border: 1px solid ${props => props.theme.btnColor};
    ${Hover3}
`;

export const LinkBtn = styled(Link)`
    color: ${props => props.theme.btnColor};
`;

export const PopUserSetName = styled.p`
    color: ${props => props.theme.text};
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
`;

export const PopUserSetMail = styled.p`
    color: #94A6BE;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
`;

export const PopUserSetTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const PopUserSetThemeP = styled.p`
    color: ${props => props.theme.text};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
`;

export const PopUserSetThemeInput = styled.input`
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: ${props => props.theme.bgCheckbox};
    outline: none;
    -webkit-appearance: none;
        -moz-appearance: none;
            appearance: none;
    &::before {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background-color: ${props => props.theme.bgColorCheck};
        transition: 0.5s;
    }
    &:checked[type=checkbox]::before {
        left: 12px;
    }  
`;