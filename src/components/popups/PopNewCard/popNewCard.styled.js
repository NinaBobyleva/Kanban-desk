import styled from "styled-components";
import { Link } from "react-router-dom";
import { Hover1, Subttl, ColorTheme } from "../../../globalStyle.styled"; 

export const PopNewCard = styled.div`
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    @media screen and (max-width: 660px) {
        top: 70px;
    }
`;

export const PopNewCardContainer = styled.div`
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
    @media screen and (max-width: 495px) {
        padding: 0;
        justify-content: flex-start;
    }
`;

export const PopNewCardBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: ${props => props.theme.bgHeadMod};
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
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

export const PopNewCardContent = styled.div`
    display: block;
    text-align: left;
`;

export const PopNewCardTtl = styled.h3`
    color: ${props => props.theme.text};
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
`;

export const PopNewCardClose = styled(Link)`
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;
    :hover {
        color: #000000;
    }
`;

export const PopNewCardWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 660px) {
        display: block;
    }
`;

export const PopNewCardForm = styled.form`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
    @media screen and (max-width: 495px) {
        max-width: 100%;
        width: 100%;
        display: block;
    }
`;

export const FormNewBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SubttlCard = styled.label`
    ${Subttl}
`;

export const FormNewInput = styled.input`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    color: ${props => props.theme.text};
    ::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
    ::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
    margin: 20px 0;
`;

export const FormNewArea = styled.textarea`
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    color: ${props => props.theme.text};
    ::-moz-placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
    ::placeholder {
        font-weight: 400;
        font-size: 14px;
        line-height: 1px;
        color: #94A6BE;
        letter-spacing: -0.14px;
    }
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    @media screen and (max-width: 495px) {
        max-width: 100%;
        height: 34px;
    }
`;

export const Categories = styled.div`
    margin-bottom: 20px;
`;

export const CategoriesP = styled.p`
    margin-bottom: 14px;
    ${Subttl}
`;

export const CategoriesThemes = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const CategoriesTheme = styled.div`
    display: inline-block;
    height: 30px;
    text-align: center;
    padding: 5px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: ${({$isActiv}) => $isActiv ? '1' : '0.4'};
    ${props => ColorTheme(props.$topicStyle)}
    label {
        font-size: 14px;
        font-weight: 600;
        line-height: 14px;
        white-space: nowrap;
    }
`;

export const RadioInput = styled.input`
    display: none;
`;

export const FormNewCreate = styled.button`
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #FFFFFF;
    float: right;
    ${Hover1}
    @media screen and (max-width: 495px) {
        width: 100%;
        height: 40px;
    }
`;