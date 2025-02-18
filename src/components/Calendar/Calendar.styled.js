import { styled } from "styled-components";
import { Subttl } from "../../globalStyle.styled";
import { DayPicker } from "react-day-picker";

export const TitleDayPicker = styled.p`
    padding-top: 7px;
`;

export const SpanDayPicker = styled.span`
    color: ${props => props.theme.text}
`;

export const Calendar = styled.div`
    width: 182px;
    margin-bottom: 20px;
    @media screen and (max-width: 660px) {
        max-width: 340px;
        width: 100%;
    }
    @media screen and (max-width: 495px) {
        width: 100%;
    }
`;

export const CalendarTtl = styled.p`
    margin-bottom: 14px;
    padding: 0 7px;
    @media screen and (max-width: 660px){
        padding: 0;
    }
    ${Subttl}
`;

export const DayPick = styled(DayPicker)`
    --rdp-cell-size: 22px;
    --rdp-caption-font-size: 14px;
    --rdp-background-color: #EAEEF6;
    --rdp-background-color-dark: #94A6BE;
    --rdp-accent-color: #94A6BE;
    --rdp-selected-color: ${props => props.theme.colorDay};
    font-size: 10px;
    color: #94A6BE;
    margin: 0;
`;