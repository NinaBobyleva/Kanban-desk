const userURL = "https://wedev-api.sky.pro/api/user";

export async function Signup({ login, name, password }) {
    const response = await fetch(userURL, {
        method: "POST",
        body: JSON.stringify({
            login,
            name,
            password,
        }),
    });

    
    if (response.status === 400) {
        throw new Error("Пользователь с таким логином уже существует!");
    }
    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    const data = await response.json();
    return data;
}

export async function Signin({ login, password }) {
    const response = await fetch(`${userURL}/login`, {
        method: "POST",
        body: JSON.stringify({
            login,
            password,
        })
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    if (response.status === 400) {
        throw new Error("Логин или пароль введен не верно!");
    }

    const data = await response.json();
    return data;
}