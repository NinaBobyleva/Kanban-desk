import { Droppable } from "react-beautiful-dnd";
import Card from "../Card/Card";
import * as S from "./column.styled";

function Column({ tasks, nameColumn, index }) {
  return (
    <S.MainColumn>
      <S.ColumnTitle>{nameColumn}</S.ColumnTitle>
      <Droppable key={index} droppableId={nameColumn}>
        {(provided) => (
          <S.Cards ref={provided.innerRef} {...provided.droppableProps}>
            {provided.placeholder}
            {tasks?.map((task, index) => (
              <Card key={task._id} task={task} index={index} />
            ))}
          </S.Cards>
        )}
      </Droppable>
    </S.MainColumn>
  );
}

export default Column;
