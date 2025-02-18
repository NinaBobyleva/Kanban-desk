import { useContext, useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import { Wrapper } from "../../globalStyle.styled";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/cardsApi";
import { UserContext } from "../../context/userContext";
import { CardsContext } from "../../context/cardContext";
import { statusList } from "../../statusList";

function transformData(data) {
  const newData = { order: [] };
  for (const status of statusList) {
    newData.order.push(status);
    newData[status] = [];
    const tasks = data.filter((task) => task.status === status);
    if (tasks.length) {
      newData[status] = tasks;
    }
  }
  newData.tasks = data;
  return newData;
}
export function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const { tasks, setTasks } = useContext(CardsContext);
  const [isLoadingError, setIsLoadingError] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getTasks(user.token)
      .then((tasks) => {
        const transformedData = transformData(tasks.tasks);
        setTasks(transformedData.tasks);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoadingError("Не удалось загрузить данные, попробуйте позже");
        setIsLoading(false);
      });
  }, []);

  return (
    <Wrapper>
      <Header user={user} />
      <Main
        tasks={tasks}
        isLoading={isLoading}
        isLoadingError={isLoadingError}
      />
      <Outlet />
    </Wrapper>
  );
}
