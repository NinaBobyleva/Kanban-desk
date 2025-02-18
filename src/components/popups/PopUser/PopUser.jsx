import { useContext } from "react";
import { paths } from "../../../paths";
import * as S from "./popUser.styled";
import { UserContext } from "../../../context/userContext";
import { GlobalThemeContext } from "../../../context/globalThemeContext";

function PopUser() {
    const {user} = useContext(UserContext);
    const {toggleTheme} = useContext(GlobalThemeContext);

    return <S.HeaderPopUserSet id="user-set-target">
    <S.PopUserSet>
    <S.PopUserSetName>{user.name}</S.PopUserSetName>
    <S.PopUserSetMail>{user.login}</S.PopUserSetMail>
    <S.PopUserSetTheme>
        <S.PopUserSetThemeP>Темная тема</S.PopUserSetThemeP>
        <S.PopUserSetThemeInput onClick={toggleTheme} type="checkbox" className="checkbox" name="checkbox"/>
    </S.PopUserSetTheme>
    <S.Button type="button"><S.LinkBtn to={paths.EXIT}>Выйти</S.LinkBtn></S.Button>
    </S.PopUserSet>
</S.HeaderPopUserSet>;
}

export default PopUser;