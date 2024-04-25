import PopUser from "../popups/PopUser/PopUser";
import { useState } from "react";

function Header({ addCard }) {
    const [isOpenModalUser, setIsOpenModalUser] = useState(false);

    function userClick(e) {
        e.preventDefault();
        setIsOpenModalUser(prev => !prev);
    }

    return <header className="header">
    <div className="container">
        <div className="header__block">
            <div className="header__logo _show _light">
                <a href="" target="_self"><img src="logo.png" alt="logo"/></a>
            </div>
            <div className="header__logo _dark">
                <a href="" target="_self"><img src="logo_dark.png" alt="logo"/></a>
            </div>
            <nav className="header__nav">
                <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard" onClick={addCard}>Создать новую задачу</a></button>
                <a href="#user-set-target" className="header__user _hover02" onClick={userClick}>Ivan Ivanov</a>
                {isOpenModalUser && <PopUser />}
            </nav>					
        </div>
    </div>			
</header>;
}

export default Header;