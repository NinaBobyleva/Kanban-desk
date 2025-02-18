import { Container } from "../../globalStyle.styled";
import { useState } from "react";
import * as S from "./header.styled";
import PopUser from "../popups/PopUser/PopUser";
import { paths } from "../../paths";

function Header({ user }) {
    const [isOpenModalUser, setIsOpenModalUser] = useState(false);

    function userClick(e) {
        e.preventDefault();
        setIsOpenModalUser(prev => !prev);
    }

    return <S.Header>
    <Container>
        <S.HeaderBlock>
            <S.HeaderLogoLight>
                <a href="" target="_self"><img src="logo.png" alt="logo"/></a>
            </S.HeaderLogoLight>
            <S.HeaderLogoDark>
                <a href="" target="_self"><img src="logo_dark.png" alt="logo"/></a>
            </S.HeaderLogoDark>
            <S.HeaderNav>
                <S.HeaderBtnMainNew id="btnMainNew"><S.HeaderBtnMainNewA to={paths.NEW_CARD}>Создать новую задачу</S.HeaderBtnMainNewA></S.HeaderBtnMainNew>
                <S.HeaderUser href="#user-set-target" onClick={userClick}>{user.name}</S.HeaderUser>
                {isOpenModalUser && <PopUser />}
            </S.HeaderNav>					
        </S.HeaderBlock>
    </Container>			
</S.Header>;
}

export default Header;