import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    ListGroup,
    ListGroupItem
} from 'reactstrap';

const TodoList = () => {


    const [todos, setTodos] = useState(
        [
            {
                id: 1,
                content: 'Schedule meeting with',
                completed: false,
                labelname: 'Panding',
                labelcolor: 'info'
            },
            {
                id: 2,
                content: 'Give Purchase report to',
                completed: false,
                labelname: 'Rejected',
                labelcolor: 'danger'
            },
            {
                id: 3,
                content: 'Book flight for holiday',
                completed: false,
                labelname: 'Completed',
                labelcolor: 'success'
            },
            {
                id: 4,
                content: 'Forward all tasks',
                completed: false,
                labelname: 'Panding',
                labelcolor: 'info'
            },
            {
                id: 5,
                content: 'Recieve shipment',
                completed: false,
                labelname: 'Rejected',
                labelcolor: 'danger'
            },
            {
                id: 6,
                content: 'Send payment today',
                completed: false,
                labelname: 'Panding',
                labelcolor: 'info'
            },
            {
                id: 7,
                content: 'Important tasks',
                completed: false,
                labelname: 'Pending',
                labelcolor: 'info'
            }
        ]
    );

    const toggleComplete = todoId => {
        setTodos(
            todos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed;
                return todo;
            })
        );
    }

    const deleteTodo = todoId => {
        setTodos(
            todos.filter(todo => todo.id !== todoId)
        );
    }

    return (
        /*--------------------------------------------------------------------------------*/
        /* Used In Dashboard-4 && widget Page                                             */
        /*--------------------------------------------------------------------------------*/
        <Card>
            <CardBody>
                <CardTitle>To Do List</CardTitle>
                <CardSubtitle>List of your next task to complete</CardSubtitle>

                <div className="todo-widget">
                    <ListGroup
                        className="list-task todo-list list-group mb-0"
                        data-role="tasklist"
                    >
                        {todos.map(todo => (
                            <ListGroupItem
                                className={
                                    'border-0 list-group-item todo-item ' +
                                    (todo.completed ? 'completed' : '')
                                }
                                key={todo.id}
                            >
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={todo.complete}
                                        id={todo.id}
                                        className="custom-control-input"
                                        data-toggle="checkbox"
                                        onClick={(todoId) => toggleComplete(todo.id)}
                                    />
                                    <label
                                        className="custom-control-label todo-label mr-3"
                                        htmlFor={todo.id}
                                    >
                                        <span className="todo-desc">{todo.content}</span>
                                    </label>
                                </div>
                                <div className={'mr-auto badge badge-' + todo.labelcolor}>
                                    {todo.labelname}
                                </div>
                                <span onClick={(todoId) => deleteTodo(todo.id)}>&times;</span>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>
            </CardBody>
        </Card>
    );
}

export default TodoList;
