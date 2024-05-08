import { Container } from "../../globalStyle.styled";
import Column from "../Column/Column";
import * as S from "./main.styled";

const statusList = [
    'Без статуса',
    'Нужно сделать',
    'В работе',
    'Тестирование',
    'Готово',
]

function Main({ tasks, isLoading }) {
    
    return <S.Main>
        <Container>
            <S.MainBlock>
            {isLoading ? "Данные загружаются..." : <S.MainContent>
                {statusList.map((status) => (
                    <Column 
                        key={status}
                        nameColumn={status}
                        tasks={tasks.filter((task) => task.status === status)} 
                    />
                ))}					
                </S.MainContent>}
            </S.MainBlock>
        </Container>
    </S.Main>;
}

export default Main;