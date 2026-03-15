import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const BookTable = (props) => {

    const{ loadBooks , dataBooks , current , pageSize , total , setCurrent , setPageSize} = props ;

    const [dataUpdate , setDataUpdate] = useState() ;

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
        },
        {
            title: 'Tên sách',
            dataIndex: 'name',
        },
        {
            title: 'Giá sách',
            dataIndex: 'price',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
        },
        {
            title: 'Tác giả',
            dataIndex: 'author',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{display: "flex" , gap: "20px"}}>
                    <Link to="#"><EditOutlined style={{ cursor: "pointer", color: "orange"}}/></Link>
                    <Link to="#"><DeleteOutlined style={{ cursor: "pointer", color: "red"}}/></Link>
                </div>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => { 
        if(pagination && pagination.current) {
            if(+pagination.current !== +current) {
                setCurrent(+pagination.current) // "6" = 6
            }
        }

        if(pagination && pagination.pageSize) {
            if(+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize) // "6" = 6
            }
        }
    };

    return (
        <>
            <Table dataSource={dataBooks} columns={columns} rowKey={"id"}
            pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { 
                            return (
                                <div> 
                                    {range[0]}-{range[1]} trên {total} rows
                                </div>) 
                        }
                    } 
            }
                onChange={onChange}
            />
        </>
    )
}

export default BookTable ;