import * as S from "./Calendar.styled";
import { ru } from "date-fns/locale/ru";

function Calendar({value, handleDayClick, dateCalendar, setDateCalendar}) {

    return <S.Calendar className="pop-new-card__calendar">
        <S.CalendarTtl>Даты</S.CalendarTtl>
        <S.DayPick onDayClick={handleDayClick} mode="single" selected={dateCalendar} onSelect={setDateCalendar} footer={value} locale={ru} />
    </S.Calendar>;
}
export default Calendar;