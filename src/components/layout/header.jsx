import { Link, NavLink, useNavigate } from 'react-router-dom';
// import './header.css'
import { AliwangwangOutlined, AppstoreOutlined, BookOutlined, HomeOutlined, LoginOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {Menu, message} from 'antd';
import { useContext, useState } from 'react';
import { AuthContext, AuthWrapper } from '../context/auth.context';
import { logoutAccountAPI } from '../../services/api.service';
const Header = () => {

    const [current, setCurrent] = useState('mail');
    const navigate = useNavigate() ;

    const {user , setUser} = useContext(AuthContext) ;


    const onClick = (e) => {
        setCurrent(e.key);
    };

    const handleLogout = async() => {
        const res = await logoutAccountAPI() ;
        if ( res.data ) {
            localStorage.removeItem("accessToken") ;
            setUser({
                id: "",
                email: "",
                name: "",
                role: "" ,
                avatar: "" ,
                phoneNumber: ""
            })
            message.success("Đăng xuất thành công");

            // redirect to home
            navigate("/") ;
        }
    }

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
                    label: <span onClick={() => handleLogout()}>Đăng xuất</span> ,
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