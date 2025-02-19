import { useContext, useEffect, useState } from "react";
import Main from "../../components/Main/Main";
import Header from "../../components/Header/Header";
import { Wrapper } from "../../globalStyle.styled";
import { Outlet } from "react-router-dom";
import { getTasks } from "../../api/cardsApi";
import { UserContext } from "../../context/userContext";
import { CardsContext } from "../../context/cardContext";
import { transformData } from "../../helpers/transformData";

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
        setTasks(transformedData);
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
