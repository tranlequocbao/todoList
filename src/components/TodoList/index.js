import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import React from "react";
export default function TodoList() {
    return (
        <Row style={{ height: "calc(100% - 350px)" }}>
            <Col
                span={24}
                style={{
                    height: "100%",
                    overflowY: "auto",
                    marginBottom: "20px",
                }}
            >
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />

                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
                <Todo name="Learn React" prioriry="High" />
                <Todo name="Learn Redux" prioriry="Medium" />
                <Todo name="Learn JavaScript" prioriry="Low" />
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input />
                    <Select defaultValue="Medium">
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
                    <Button type="primary">Add</Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
