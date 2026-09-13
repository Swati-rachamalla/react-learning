import {useState} from 'react'; 

export const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, task: 'Buy groceries', completed: false },
        { id: 2, task: 'Clean the house', completed: true },
        { id: 3, task: 'Finish React project', completed: false },
    ]);

    const toggleTodo = (todoId) => {
        setTodos((currentTodos) => currentTodos.map((todo) => (
            todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : todo
        )));
    };

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        {todo.task}
                    </li>
                ))}
            </ul>
        </div>
    );
}