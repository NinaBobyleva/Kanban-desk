import { useContext, useState } from "react";
import Calendar from "../../Calendar/Calendar"
import * as S from "./popNewCard.styled"
import { paths } from "../../../paths";
import { UserContext } from "../../../context/userContext";
import { postNewTasks } from "../../../api/cardsApi";
import { useNavigate } from "react-router-dom";
import { CardsContext } from "../../../context/cardContext";
import { DateContext } from "../../../context/dateContext";
import { TitleDayPicker, SpanDayPicker } from "../../Calendar/Calendar.styled";


function PopNewCard() {
    
    const {user} = useContext(UserContext);
    const [error, setError] = useState('');
    const {setTasks} = useContext(CardsContext);
    const {dateCalendar, setDateCalendar} = useContext(DateContext);
    const navigation = useNavigate();
    const [topic, setTopic] = useState('');

    const [value, setValue] = useState(<TitleDayPicker>Выберите срок исполнения.</TitleDayPicker>);

    const handleDayClick = (dateCalendar) => {
        const formatDate = dateCalendar.toLocaleDateString("RU-ru");
        setValue(<TitleDayPicker>Срок исполнения: <SpanDayPicker>{formatDate}</SpanDayPicker></TitleDayPicker>);
    }

    const [newInputTask, setNewInputTask] = useState({
        title: '',
        status: 'Без статуса',
        description: '',
    });

    const onChangedInputTask = (e) => {
        const {value, name} = e.target;
        setNewInputTask({...newInputTask, [name]: value});
    }

    const onAddNewCard = () => {
        setError('');

        if (!newInputTask.description) {
            return setError("Введите описание задачи");
        }

        const title = newInputTask.title || "Новая задача";

        const newTask = {
            ...newInputTask,
            title, topic,
            date: dateCalendar,
        }

        postNewTasks({token: user.token, newTasks: newTask})
        .then((res) => {
            setTasks(res.tasks);
            navigation(paths.HOME);
        })
        .catch((err) => {
            setError(err.message);
        })
    }

    return <S.PopNewCard id="popNewCard">
        <S.PopNewCardContainer>
            <S.PopNewCardBlock>
                <S.PopNewCardContent>
                    <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                    <S.PopNewCardClose to={paths.HOME}>&#10006;</S.PopNewCardClose>
                    <S.PopNewCardWrap>
                        <S.PopNewCardForm id="formNewCard" action="#">
                            <S.FormNewBlock>
                                <S.SubttlCard htmlFor="formTitle">Название задачи</S.SubttlCard>
                                <S.FormNewInput onChange={onChangedInputTask} type="text" value={newInputTask.title} name="title" id="formTitle" placeholder="Введите название задачи..." autoFocus/>
                            </S.FormNewBlock>
                            <S.FormNewBlock>
                                <S.SubttlCard htmlFor="textArea">Описание задачи</S.SubttlCard>
                                <S.FormNewArea onChange={onChangedInputTask} value={newInputTask.description} name="description" id="textArea"  placeholder="Введите описание задачи..."></S.FormNewArea>
                            </S.FormNewBlock>
                        </S.PopNewCardForm>
                        <Calendar dateCalendar={dateCalendar} setDateCalendar={setDateCalendar} handleDayClick={handleDayClick} value={value}/>
                    </S.PopNewCardWrap>
                    <S.Categories>
                        <S.CategoriesP>Категория</S.CategoriesP>
                        <S.CategoriesThemes>
                            <S.CategoriesTheme $isActiv={topic === 'Web Design'} $topicStyle="_orange">
                                <label htmlFor="category1">Web Design</label>
                                <S.RadioInput onChange={(e) => {setTopic(e.target.value)}} type="radio" name="category" id="category1" value={'Web Design'} />
                            </S.CategoriesTheme>
                            <S.CategoriesTheme $isActiv={topic === 'Research'} $topicStyle="_green">
                                <label htmlFor="category2">Research</label>
                                <S.RadioInput onChange={(e) => {setTopic(e.target.value)}} type="radio" name="category" id="category2" value={'Research'} />
                            </S.CategoriesTheme>
                            <S.CategoriesTheme $isActiv={topic === 'Copywriting'} $topicStyle="_purple">
                                <label htmlFor="category3">Copywriting</label>
                                <S.RadioInput onChange={(e) => {setTopic(e.target.value)}} type="radio" name="category" id="category3" value={'Copywriting'} />
                            </S.CategoriesTheme>
                        </S.CategoriesThemes>
                    </S.Categories>
                    {error && error}
                    <S.FormNewCreate id="btnCreate" onClick={onAddNewCard}>Создать задачу</S.FormNewCreate>
                </S.PopNewCardContent>
            </S.PopNewCardBlock>
        </S.PopNewCardContainer>
    </S.PopNewCard>;
}

export default PopNewCard;