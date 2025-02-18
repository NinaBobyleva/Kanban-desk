import styled from "styled-components";
import { ColorTheme, Hover1, Hover3, Subttl } from "../../../globalStyle.styled";
import { Link } from "react-router-dom";

export const PopBrowse = styled.div`
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 7;
    @media screen and (max-width: 660px) {
        top: 70px;
    }
`;

export const PopBrowseContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    @media screen and (max-width: 660px) {
        padding: 0;
        justify-content: flex-start;
    }
`;

export const PopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${props => props.theme.bgHeadMod};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid ${props => props.theme.border};
    position: relative;
    @media screen and (max-width: 660px) {
        border-radius: 0;
    }
    @media screen and (max-width: 495px) {
        padding: 20px 16px 32px;
    }
`;

export const PopBrowseContent = styled.div`
    display: block;
    text-align: left;
    opacity: 1;
    display: block;
    @media screen and (max-width: 495px) {
        display: block;
        margin-bottom: 20px;
    }
`;

export const CategoriesTheme = styled.div`
    display: inline-block;
    height: 30px;
    text-align: center;
    padding: 6px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 1;
    ${props => ColorTheme(props.$topicStyle)}
    p {
        font-size: 14px;
        font-weight: 600;
        white-space: nowrap;
    }
`;

export const ThemeDown = styled.div`
    display: none;
    margin-bottom: 20px;
    @media screen and (max-width: 495px) {
        display: block;
        margin-bottom: 20px;
    }
`;

export const ThemeTop = styled.div`
    display: block;
    @media screen and (max-width: 495px) {
        display: none;
    }
`;

export const PopBrowseTopBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const PopBrowseTtl = styled.h3`
    color: ${props => props.theme.text};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`;

export const Status = styled.div`
    margin-bottom: 11px;
`;

export const StatusP = styled.div`
    margin-bottom: 14px;
    ${Subttl}
`;

export const StatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const StatusTheme = styled.div`
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: ${({$isActiv}) => $isActiv ? '#FFFFFF' : '#94A6BE'};
    background: ${({$isActiv}) => $isActiv ? '#94A6BE' : ''};
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
`;

export const StatusThemeP = styled.label`
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
`;

export const RadioInput = styled.input`
    display: none;
`;

export const PopBrowseWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 660px) {
        display: block;
    }
`;

export const PopBrowseForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
    @media screen and (max-width: 495px) {
        max-width: 100%;
    }
`;

export const FormBrowseBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PopBrowseSubttl = styled.label`
    ${Subttl}
`;

export const FormBrowseArea = styled.textarea`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: ${props => props.theme.body};
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;
    color: ${props => props.theme.text};
    &::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
    &::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
    @media screen and (max-width: 495px) {
        max-width: 100%;
        height: 37px;
    }
`;

export const PopBrowseBtnBrowse = styled.div`
    display: none;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    button {
        height: 30px;
        margin-bottom: 10px;
        padding: 0 14px;
        margin-right: 8px;
        @media screen and (max-width: 495px) {
            width: 100%;
            height: 40px;
        }
    }
`;

export const BtnGroup = styled.div`
    button {
        margin-right: 8px;
        @media screen and (max-width: 495px) {
            margin-right: 0px;
        }
    }
    @media screen and (max-width: 495px) {
        width: 100%;
    }
`;

export const BtnBor = styled.button`
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, ${props => props.theme.btnColor});
    outline: none;
    background: transparent;
    ${Hover3}
`;

export const BtnBorA = styled.a`
   color: ${props => props.theme.btnColor};
`;

export const BtnBg = styled.button`
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
    ${Hover1}
`;

export const BtnBgA = styled.a`
    color: #FFFFFF;
`;

export const LinkBtnBgA = styled(Link)`
    color: #FFFFFF;
`;

export const PopBrowseBtnEdit = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    button {
        height: 30px;
        margin-bottom: 10px;
        padding: 0 14px;
        margin-right: 8px;
        @media screen and (max-width: 495px) {
            width: 100%;
            height: 40px;
        }
    }
`;