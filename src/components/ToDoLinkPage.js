import ToDoService from "../services/ToDoService";
import {Link, Route, Routes} from "react-router-dom";
import ToDoPage from "./ToDoPage";
import {ListGroup} from "react-bootstrap";
import {useState} from "react";



export default function ToDoLinkPage(){

    const toDoService = new ToDoService();
    const [toDoList, setToDoList] = useState(toDoService.getDayTodoList());

    return(
        <div>
            <h1>ToDoList</h1>

            <ListGroup as="ol" numbered>
                {
                    toDoList.map((dayToDo) => {
                        return(
                            <ListGroup.Item as="li">
                                    <Link key={dayToDo.id} to={`${dayToDo.id}/todo`}>Day {dayToDo.date}</Link><br/>
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>

            <Routes>
                {
                toDoList.map((dayToDo) => {
                    const path = `${dayToDo.id}/todo`;
                    return(
                        <Route path={path} element={<ToDoPage dayToDoId={dayToDo.id} toDoList={dayToDo.toDoList} setToDoList={setToDoList}  />} />
                    )
                })
            }
            </Routes>
        </div>
    )
}