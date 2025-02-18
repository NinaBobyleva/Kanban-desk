import { Container } from "../../globalStyle.styled";
import Column from "../Column/Column";
import * as S from "./main.styled";
import { useContext } from "react";
import { CardsContext } from "../../context/cardContext";
import { DragDropContext } from "react-beautiful-dnd";
import { statusList } from "../../statusList";
import { UserContext } from "../../context/userContext";
import { editTasks } from "../../api/cardsApi";

function Main({ isLoading, isLoadingError }) {
  const { tasks, setTasks } = useContext(CardsContext);
  console.log(tasks);
  const { user } = useContext(UserContext);

  const onDragEnd = (result) => {
    console.log("result", result);
    const newTasks = tasks;
    console.log("newTasks", newTasks);
    const task = tasks.find((t) => t._id === result.draggableId);
    console.log(task);
    task.status = result.destination.droppableId;
    console.log(task.status);
    // newTasks[result.source.droppableId].splice(result.source.index, 1);
    // newTasks[result.destination.droppableId].splice(
    //   result.destination.index,
    //   0,
    //   task
    // );
    const upDateTask = {
      title: task.title,
      topic: task.topic,
      date: task.date,
      description: task.description,
      status: task.status,
    };
    editTasks({ token: user.token, editTask: upDateTask, id: task._id }).then(
      (res) => {
        console.log(res);
        setTasks(res.tasks);
      }
    );
    console.log("newTasks", newTasks);

    setTasks(newTasks);
  };

  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          {isLoadingError ? (
            <p>{isLoadingError}</p>
          ) : isLoading ? (
            "Данные загружаются..."
          ) : (
            <S.MainContent>
              <DragDropContext onDragEnd={onDragEnd}>
                {statusList.map((status, index) => (
                  <Column
                    key={status}
                    nameColumn={status}
                    index={index}
                    tasks={tasks.filter((el) => el.status === status)}
                  />
                ))}
              </DragDropContext>
            </S.MainContent>
          )}
        </S.MainBlock>
      </Container>
    </S.Main>
  );
}

export default Main;
