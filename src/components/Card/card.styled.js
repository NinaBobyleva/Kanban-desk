import styled from "styled-components";
import { ColorTheme } from "../../globalStyle.styled";

export const CardsItem = styled.div`
    padding: 5px;
    animation-name: card-animation;
    animation-duration: 500ms;
    animation-timing-function: linear;
`;

export const CardsCard = styled.div`
    width: 220px;
    height: 130px;
    background-color: ${props => props.theme.bgHeadMod};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
    @media screen and (max-width: 1200px) {
        width: 220px;
        height: 130px;
        background-color: ${props => props.theme.bgHeadMod};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: stretch;
        padding: 15px 13px 19px;
    }
`;

export const CardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TopicText = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`;

export const CardTheme = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
    ${props => ColorTheme(props.$topicStyle)}
    ${TopicText} {
        ${props => ColorTheme(props.$topicStyle)}
    }
`;

export const CardBtn = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
`;

export const CardDiv = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
`;

export const CardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

export const CardTitle = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: ${props => props.theme.text};
    margin-bottom: 10px;
`;

export const CardDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const CardSvg = styled.svg`
    width: 13px;
`;

export const CardP = styled.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
`;