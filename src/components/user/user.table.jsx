import { Table } from 'antd';
import { useEffect, useState } from 'react';

const UserTable = (props) => {

    const {dataUsers} = props;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    console.log(">> Run render 000")
    return (<Table columns={columns} dataSource={dataUsers} rowKey={"id"}/>);
}

export default UserTable;