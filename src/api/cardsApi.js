const kanbanURL = "https://wedev-api.sky.pro/api/kanban";

export async function getTasks(token) {
    const response = await fetch(kanbanURL, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    if (response.status === 401) {
        throw new Error("Нет авторизации!");
    }

    const data = await response.json();
    return data;
}

export async function postNewTasks({token, newTasks}) {
    const response = await fetch(kanbanURL, {
        method: "POST",
        body: JSON.stringify(newTasks),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    if (response.status === 401) {
        throw new Error("Нет авторизации!");
    }

    if (response.status === 400) {
        throw new Error("Полученные данные не в формате JSON!");
    }

    const data = await response.json();
    return data;
}

export async function editTasks({token, editTask, id}) {
    const response = await fetch(kanbanURL + `/${id}`, {
        method: "PUT",
        body: JSON.stringify(editTask),
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    if (response.status === 401) {
        throw new Error("Нет авторизации!");
    }

    if (response.status === 400) {
        throw new Error("Полученные данные не в формате JSON!");
    }

    const data = await response.json();
    return data;
}

export async function deleteTasks({token, id}) {
    const response = await fetch(kanbanURL + `/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка сервера");
    }

    if (response.status === 401) {
        throw new Error("Нет авторизации!");
    }

    const data = await response.json();
    return data;
}