const API_BASE_URL = 'http://3.1.8.111:8080/todo';
const MY_NAME = 'thanhnam';

export type ITodo = {
    id: number;
    name: string;
    title: string;
    completed: boolean;
};

export async function getTodos() {
    const response = await fetch(`${API_BASE_URL}?name=${MY_NAME}`);
    if (!response.ok) {
        throw new Error('Failed to fetch todos');
    }
    return response.json();
}

export async function createTodo(title: string) {
    const response = await fetch(`${API_BASE_URL}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, name: MY_NAME }),
    });
    if (!response.ok) {
        throw new Error('Failed to create todo');
    }
    return response.json();
}

export async function deleteTodo(id: number) {
    const response = await fetch(`${API_BASE_URL}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: MY_NAME, id }),
    });
    if (!response.ok) {
        throw new Error('Failed to delete todo');
    }
    return response.json();
}
