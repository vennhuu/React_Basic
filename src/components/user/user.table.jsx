import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { useEffect, useState } from 'react';
import UpdateUserModal from './update.user.modal';

const UserTable = (props) => {

    const {dataUsers} = props;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            render: (_, record) => {
                return (
                    <a href="#">{record.id}</a>
                )
            },
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
            <div style={{display: "flex" , gap: "20px"}}>
                <EditOutlined style={{ cursor: "pointer", color: "orange"}}/>
                <DeleteOutlined style={{ cursor: "pointer", color: "red"}}/>
            </div>
            ),
        },
    ];

    console.log(">> Run render 000")
    return (
        <>
            <Table columns={columns} dataSource={dataUsers} rowKey={"id"}/>
            <UpdateUserModal/>
        </>
    );
}

export default UserTable;