import { Link, NavLink } from 'react-router-dom';
// import './header.css'
import { AliwangwangOutlined, AppstoreOutlined, BookOutlined, HomeOutlined, LoginOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {Menu} from 'antd';
import { useContext, useState } from 'react';
import { AuthContext, AuthWrapper } from '../context/auth.context';
const Header = () => {

    const [current, setCurrent] = useState('mail');

    const {user} = useContext(AuthContext) ;


    const onClick = e => {
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
        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),
        ...(user.id ? [{
            label: `Chào mừng ${user.name}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: 'Đăng xuất',
                    key: 'logout',

                }
            ]
        }] : []),
    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header ;