import ToDoService from "../services/ToDoService";
import {Link, Route, Routes} from "react-router-dom";
import ToDoPage from "./ToDoPage";



export default function ToDoLinkPage(){

    const toDoService = new ToDoService();

    return(
        <div>
            <h1>ToDoList</h1>
            {
                toDoService.getDayTodoList().map((dayToDo) => {
                    return(
                        <div>
                        <Link key={dayToDo.id} to={`${dayToDo.id}/todo`}>Day {dayToDo.date}</Link>
                            <br/>
                        </div>
                    )
                })
            }
            <Routes>
                {
                toDoService.getDayTodoList().map((dayToDo) => {
                    const path = `${dayToDo.id}/todo`;
                    return(
                        <Route path={path} element={<ToDoPage id={dayToDo.id} toDoList={dayToDo.toDoList}  />} />
                    )
                })
            }
            </Routes>
        </div>
    )
}