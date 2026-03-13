import { Link, NavLink } from 'react-router-dom';
// import './header.css'
import { AppstoreOutlined, BookOutlined, HomeOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {Menu} from 'antd';
import { useContext, useState } from 'react';
import { AuthContext, AuthWrapper } from '../context/auth.context';
const Header = () => {

    const [current, setCurrent] = useState('mail');

    const {user} = useContext(AuthContext) ;

    console.log("Check data"  , user);

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
        {
            label: "Cài đặt",
            key: 'setting',
            icon: <SettingOutlined />,
            children: [
                {
                    label: <Link to={"/login"}>Đăng nhập</Link>,
                    key: 'login',
                },
                {
                    label: "Đăng xuất",
                    key: 'logout',
                }
            ]
        },
    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header ;