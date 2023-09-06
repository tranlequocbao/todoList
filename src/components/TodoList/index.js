import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
    selectorStatusTodoList,
    selectorTodoList,
} from '../../store/selectors';
import { addNewTodo, getTodos } from './todolistSlice';
import '../../style/todoList.css';
import { message } from 'antd'


export default function TodoList() {
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState('');
    const [priority, setPriority] = useState('Medium');

    const todoList = useSelector(selectorTodoList);
    const statusLoading = useSelector(selectorStatusTodoList);
    useEffect(() => {
        dispatch(getTodos(error));
    }, []);
    const error = (content) => {
        message.error(content);
    };
    const handleAddButtonClick = () => {
        dispatch(
            addNewTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            }),
        );
        setTodoName('');
        setPriority('Medium');
    };

    return (
        <Row style={{ height: 'calc(100% - 350px)' }}>
            <Col
                span={24}
                style={{
                    height: '100%',
                    width: '100%',
                    overflowY: 'auto',
                    marginBottom: '20px',
                }}
            >
                {statusLoading !== 'loading' ? (
                    todoList.map((todo) => {
                        return (
                            <Todo
                                name={todo.name}
                                key={todo.id}
                                priority={todo.priority}
                                completed={todo.completed}
                                id={todo.id}
                            />
                        );
                    })
                ) : (
                    <div
                        className="container-loader"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <div className="custom-loader"></div>
                    </div>
                )}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input
                        value={todoName}
                        onChange={(e) => setTodoName(e.target.value)}
                    />
                    <Select
                        defaultValue="Medium"
                        onChange={(value) => setPriority(value)}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
