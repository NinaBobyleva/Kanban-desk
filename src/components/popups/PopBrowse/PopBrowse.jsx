import { paths } from "../../../paths";
import Calendar from "../../Calendar/Calendar";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import * as S from "./popBrowse.styled";
import { CategoriesP, CategoriesTheme } from "../PopNewCard/popNewCard.styled";
import { CardsContext } from "../../../context/cardContext";
import { UserContext } from "../../../context/userContext";
import { deleteTasks, editTasks } from "../../../api/cardsApi";
import { TitleDayPicker, SpanDayPicker } from "../../Calendar/Calendar.styled";
import { DateContext } from "../../../context/dateContext";
import { transformData } from "../../../helpers/transformData";

function PopBrowse() {
  const colors = {
    "Web Design": "_orange",
    Research: "_green",
    Copywriting: "_purple",
  };
  const { tasks, setTasks } = useContext(CardsContext);
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const [isActiv, setIsActiv] = useState(false);
  const { dateCalendar, setDateCalendar } = useContext(DateContext);
  const { id } = useParams();
  const tasksCard = tasks.tasks.find((task) => task._id === id);
  const [editInputTask, setEditInputTask] = useState({
    title: tasksCard.title,
    topic: tasksCard.topic,
    description: tasksCard.description,
    date: tasksCard.date,
    status: tasksCard.status,
  });

  const onSaveEditTask = () => {
    const editTask = {
      title: tasksCard.title,
      topic: tasksCard.topic,
      date: dateCalendar,
      description: editInputTask.description,
      status: editInputTask.status,
    };

    editTasks({ token: user.token, editTask: editTask, id })
      .then((tasks) => {
        const transformedData = transformData(tasks.tasks);
        setTasks(transformedData);
        navigation(paths.HOME);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const currentDate = new Date(tasksCard.date).toLocaleDateString();

  const [value, setValue] = useState(
    <TitleDayPicker>
      Срок исполнения: <SpanDayPicker>{currentDate}</SpanDayPicker>
    </TitleDayPicker>
  );

  const handleDayClick = (dateCalendar) => {
    if (isActiv) {
      const formatDate = dateCalendar.toLocaleDateString("RU-ru");
      return setValue(
        <TitleDayPicker>
          Срок исполнения: <SpanDayPicker>{formatDate}</SpanDayPicker>
        </TitleDayPicker>
      );
    }
  };

  const deleteCards = () => {
    deleteTasks({ token: user.token, id })
      .then((tasks) => {
        const transformedData = transformData(tasks.tasks);
        setTasks(transformedData);
        navigation(paths.HOME);
      })
      .catch((err) => {
        setError(err.massage);
      });
  };

  const cancellationEdit = () => {
    setEditInputTask(tasksCard);
    setValue(
      <TitleDayPicker>
        Срок исполнения: <SpanDayPicker>{currentDate}</SpanDayPicker>
      </TitleDayPicker>
    );
  };

  return (
    <S.PopBrowse onDragOver={(e) => e.preventDefault()} id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTtl>{tasksCard.title}</S.PopBrowseTtl>
              <S.ThemeTop>
                <S.CategoriesTheme $topicStyle={`${colors[tasksCard.topic]}`}>
                  <p>{tasksCard.topic}</p>
                </S.CategoriesTheme>
              </S.ThemeTop>
            </S.PopBrowseTopBlock>
            <S.Status>
              <S.StatusP>Статус</S.StatusP>
              {isActiv ? (
                <S.StatusThemes>
                  <S.StatusTheme
                    $isActiv={editInputTask.status === "Без статуса"}
                  >
                    <S.StatusThemeP htmlFor="status1">
                      Без статуса
                    </S.StatusThemeP>
                    <S.RadioInput
                      onChange={(e) => {
                        setEditInputTask({
                          ...editInputTask,
                          status: e.target.value,
                        });
                      }}
                      type="radio"
                      name="status"
                      id="status1"
                      value={"Без статуса"}
                    />
                  </S.StatusTheme>
                  <S.StatusTheme
                    $isActiv={editInputTask.status === "Нужно сделать"}
                  >
                    <S.StatusThemeP htmlFor="status2">
                      Нужно сделать
                    </S.StatusThemeP>
                    <S.RadioInput
                      onChange={(e) => {
                        setEditInputTask({
                          ...editInputTask,
                          status: e.target.value,
                        });
                      }}
                      type="radio"
                      name="status"
                      id="status2"
                      value={"Нужно сделать"}
                    />
                  </S.StatusTheme>
                  <S.StatusTheme $isActiv={editInputTask.status === "В работе"}>
                    <S.StatusThemeP htmlFor="status3">В работе</S.StatusThemeP>
                    <S.RadioInput
                      onChange={(e) => {
                        setEditInputTask({
                          ...editInputTask,
                          status: e.target.value,
                        });
                      }}
                      type="radio"
                      name="status"
                      id="status3"
                      value={"В работе"}
                    />
                  </S.StatusTheme>
                  <S.StatusTheme
                    $isActiv={editInputTask.status === "Тестирование"}
                  >
                    <S.StatusThemeP htmlFor="status4">
                      Тестирование
                    </S.StatusThemeP>
                    <S.RadioInput
                      onChange={(e) => {
                        setEditInputTask({
                          ...editInputTask,
                          status: e.target.value,
                        });
                      }}
                      type="radio"
                      name="status"
                      id="status4"
                      value={"Тестирование"}
                    />
                  </S.StatusTheme>
                  <S.StatusTheme $isActiv={editInputTask.status === "Готово"}>
                    <S.StatusThemeP htmlFor="status5">Готово</S.StatusThemeP>
                    <S.RadioInput
                      onChange={(e) => {
                        setEditInputTask({
                          ...editInputTask,
                          status: e.target.value,
                        });
                      }}
                      type="radio"
                      name="status"
                      id="status5"
                      value={"Готово"}
                    />
                  </S.StatusTheme>
                </S.StatusThemes>
              ) : (
                <S.StatusThemes>
                  <S.StatusTheme $isActiv={true}>
                    <S.StatusThemeP>{tasksCard.status}</S.StatusThemeP>
                  </S.StatusTheme>
                </S.StatusThemes>
              )}
            </S.Status>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.PopBrowseSubttl htmlFor="textArea01">
                    Описание задачи
                  </S.PopBrowseSubttl>
                  {isActiv ? (
                    <S.FormBrowseArea
                      onChange={(e) => {
                        setEditInputTask({
                          ...editInputTask,
                          description: e.target.value,
                        });
                      }}
                      value={editInputTask.description}
                      name="description"
                      id="textArea01"
                      placeholder="Введите описание задачи..."
                    ></S.FormBrowseArea>
                  ) : (
                    <S.FormBrowseArea
                      name="text"
                      id="textArea01"
                      value={editInputTask.description}
                      readOnly
                      placeholder="Введите описание задачи..."
                    ></S.FormBrowseArea>
                  )}
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              {isActiv ? (
                <Calendar
                  dateCalendar={dateCalendar}
                  setDateCalendar={setDateCalendar}
                  handleDayClick={handleDayClick}
                  value={value}
                />
              ) : (
                <Calendar handleDayClick={handleDayClick} value={value} />
              )}
            </S.PopBrowseWrap>
            <S.ThemeDown>
              <CategoriesP>Категория</CategoriesP>
              <CategoriesTheme className="_orange _active-category">
                <p className="_orange">Web Design</p>
              </CategoriesTheme>
            </S.ThemeDown>
            {isActiv ? (
              <S.PopBrowseBtnEdit>
                <S.BtnGroup>
                  <S.BtnBg onClick={onSaveEditTask} className="btn-edit__edit">
                    <S.BtnBgA>Сохранить</S.BtnBgA>
                  </S.BtnBg>
                  <S.BtnBor
                    onClick={cancellationEdit}
                    className="btn-edit__edit"
                  >
                    <S.BtnBorA>Отменить</S.BtnBorA>
                  </S.BtnBor>
                  <S.BtnBor
                    onClick={deleteCards}
                    className="btn-edit__delete"
                    id="btnDelete"
                  >
                    <S.BtnBorA>Удалить задачу</S.BtnBorA>
                  </S.BtnBor>
                </S.BtnGroup>
                <S.BtnBg className="btn-edit__close">
                  <S.LinkBtnBgA to={paths.HOME}>Закрыть</S.LinkBtnBgA>
                </S.BtnBg>
              </S.PopBrowseBtnEdit>
            ) : (
              <S.PopBrowseBtnBrowse>
                <S.BtnGroup>
                  <S.BtnBor
                    onClick={() => {
                      setIsActiv(true);
                    }}
                    className="btn-browse__edit"
                  >
                    <S.BtnBorA>Редактировать задачу</S.BtnBorA>
                  </S.BtnBor>
                  <S.BtnBor
                    onClick={deleteCards}
                    className="btn-browse__delete"
                  >
                    <S.BtnBorA>Удалить задачу</S.BtnBorA>
                  </S.BtnBor>
                </S.BtnGroup>
                <S.BtnBg className="btn-browse__close">
                  <S.LinkBtnBgA to={paths.HOME}>Закрыть</S.LinkBtnBgA>
                </S.BtnBg>
              </S.PopBrowseBtnBrowse>
            )}
            {error && error}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowse;
