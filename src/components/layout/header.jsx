import { Link, NavLink } from 'react-router-dom';
// import './header.css'
import { AppstoreOutlined, BookOutlined, HomeOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {Menu} from 'antd';
import { useState } from 'react';
const Header = () => {

    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
    {
        label: <Link to={"/"}>Trang chủ</Link>,
        key: 'home',
        icon: <HomeOutlined />,
    },
    {
        label: <Link to={"/users"}>Người dùng</Link>,
        key: 'users',
        icon: <UserOutlined />,
    },
    {
        label: <Link to={"/books"}>Sách</Link>,
        key: 'books',
        icon: <BookOutlined />,
    },
    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header ;