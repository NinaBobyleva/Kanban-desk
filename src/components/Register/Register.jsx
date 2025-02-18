import { Wrapper } from "../../globalStyle.styled";
import { Link } from "react-router-dom";
import { paths } from "../../paths";
import * as S from "../Login/login.styled";
import { ModalBtnSignupEnt, Err } from "./register.styled";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { Signup } from "../../api/auth";

export function Register() {
    let navigate = useNavigate();

    const [errMessage, setErrMessage] = useState('');

    const [inputValue, setInputValue] = useState({
        login: '',
        name: '',
        password: ''
    });

    const onChangedInput = (e) => {
        const {value, name} = e.target;
        setInputValue({...inputValue, [name]: value});
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        const {login, name, password} = inputValue;

        if (!login || !name || !password) {
            return setErrMessage("Заполните все поля!");
        }

        Signup(inputValue).then(() => {
            setErrMessage('');
            navigate(paths.HOME);
        }).catch((error) => {
            setErrMessage(error.message);
        })
    };
    return (
        <Wrapper>
            <S.ContainerSignin>
                <S.Modal>
                    <S.ModalBlock>
                        <S.ModalTtl>
                            <h2>Регистрация</h2>
                        </S.ModalTtl>
                        <S.ModalFormLogin onSubmit={handleSubmitRegister} id="formLogUp" action="#">
                            <S.ModalInput onChange={onChangedInput} className="first-name" value={inputValue.name} type="text" name="name" id="first-name" placeholder="Имя" />
                            <S.ModalInput onChange={onChangedInput} className="login" value={inputValue.login} type="text" name="login" id="loginReg" placeholder="Эл. почта" />
                            <S.ModalInput onChange={onChangedInput} className="password-first" value={inputValue.password} type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                            <Err>{errMessage}</Err>
                            <ModalBtnSignupEnt id="SignUpEnter"><a>Зарегистрироваться</a></ModalBtnSignupEnt>
                            <S.ModalFormGroup>
                                <p>Уже есть аккаунт?  <Link to={paths.LOGIN}>Войдите здесь</Link></p>
                            </S.ModalFormGroup>
                        </S.ModalFormLogin>
                    </S.ModalBlock>
                </S.Modal>
            </S.ContainerSignin>
        </Wrapper>
    )
}