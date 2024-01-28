import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ToDoPage({ dayToDoId, toDoList, setToDoList }) {
    const handleCheck = (id) => {
        const updatedList = toDoList.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setToDoList(updatedList);
    };

    return (
        <Form>
            <h1 className="text-center mb-4">Welcome to your ToDo List</h1>
            {toDoList.map((todo) => (
                <Form.Check
                    key={todo.id}
                    label={todo.description}
                    name="group1"
                    type="checkbox"
                    id={`reverse-${todo.id}-1`}
                    checked={todo.completed}
                    onChange={() => handleCheck(todo.id)}
                    className="mb-3"
                />
            ))}
            <Form.Control type="text" placeholder="Task ..." />
            <Button variant="primary" type="submit" className="mt-3">
                Save
            </Button>
        </Form>
    );
}
