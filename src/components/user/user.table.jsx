import { Table } from 'antd';
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../../services/api.service';

const UserTable = () => {

    const [dataUsers , setDataUsers] = useState([
        {id: "vennhuu" , name: 21 , email: "Hanoi"} ,
        {id: "Phuoc" , name: 22 , email: "HCM"}
    ]) ;

    // empty array => run once
    useEffect(() => {
        console.log(">>>run")
        loadUser();
    }, []);

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

    const loadUser = async() => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }

    console.log(">> Run render 000")
    return (<Table columns={columns} dataSource={dataUsers} rowKey={"id"}/>);
}

export default UserTable;