import { Form } from "react-bootstrap";

export default function ToDoPage({ id, toDoList, setToDoList }) {
    return (
        <Form>
            {toDoList.map((todo) => (
                <div key={todo.id} className="mb-3">
                    <Form.Check

                        label={todo.description}
                        name="group1"
                        type="checkbox"
                        id={`reverse-${todo.id}-1`}
                    />
                </div>
            ))}
        </Form>
    );
}
