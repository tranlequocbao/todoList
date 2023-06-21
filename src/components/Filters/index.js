import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { priorityChange, searchStatus, searchText } from "../../store/actions";
import filterSlice from "./filterSlice";


const { Search } = Input;


export default function Filters() {
    const [searchTextFilter,setSearchTextFilter]=React.useState('')
    const [checkStatus,setCheckStatus]=useState('All')
    const [priorityValue,setPriorityValue]=useState([])
    const dispatch=useDispatch();

    const handleSearchText= (e)=>{
        setSearchTextFilter(e.target.value)
        dispatch(filterSlice.actions.searchText(e.target.value))
    }
    const handleCheckStatus=(e)=>{

        setCheckStatus(e.target.value)
        dispatch(filterSlice.actions.searchStatus(e.target.value))
    }
    const handlePriorityChange=(value)=>{
        setPriorityValue(value)
        dispatch(filterSlice.actions.priorityChange(value))
    }
    return (
        <Row justify="center">
            <Col span={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Search
                </Typography.Paragraph>
                <Search placeholder="input search text" value={searchTextFilter} onChange={handleSearchText} />
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Status
                </Typography.Paragraph>
                <Radio.Group value={checkStatus} onChange={handleCheckStatus}>
                    <Radio value="All">All</Radio>
                    <Radio value="Completed">Completed</Radio>
                    <Radio value="Todo">To do</Radio>
                </Radio.Group>
            </Col>
            <Col sm={24}>
                <Typography.Paragraph
                    style={{
                        fontWeight: "bold",
                        marginBottom: 3,
                        marginTop: 10,
                    }}
                >
                    Filter By Priority
                </Typography.Paragraph>
                <Select
                    mode="multiple"
                    allowClear
                    placeholder="Please select"
                    style={{ width: "100%" }}
                    value={priorityValue}
                    onChange={handlePriorityChange}
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
            </Col>
        </Row>
    );
}
