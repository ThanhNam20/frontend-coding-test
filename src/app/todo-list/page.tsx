'use client';

import { createTodo, deleteTodo, getTodos, ITodo } from '@/apis';
import { useEffect, useState } from 'react';
import '@/styles/todoPage.scss';

export default function TodoList() {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        getTodosData();
    }, []);

    const getTodosData = async () => {
        try {
            const todos = await getTodos();
            setTodos(todos);
        } catch (error) {
            console.error('Error fetching todos:', error);
            return [];
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const title = (form.elements.namedItem('title') as HTMLInputElement)
            .value;
        if (!title) {
            alert('Please fill in the title');
            return;
        }

        try {
            await createTodo(title);
            form.reset();
            await getTodosData();
        } catch (error) {
            console.error('Error creating todo:', error);
        }
    };

    const toggleComplete = (id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = async (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        try {
            await deleteTodo(id);
        } catch (error) {
            console.error('Error fetching todos after deletion:', error);
        }
    };

    return (
        <div className="todo-container">
            <h1>My To Do List</h1>
            <form onSubmit={handleSubmit} className="input-section">
                <input type="text" placeholder="Title..." name="title" />
                <button type="submit">Add</button>
            </form>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        className={todo.completed ? 'completed' : ''}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo.id)}
                        />
                        <span>{todo.title}</span>
                        <button
                            className="delete-btn"
                            onClick={() => removeTodo(todo.id)}
                        >
                            ×
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
