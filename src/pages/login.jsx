import { Button, Form, Input, message, notification } from "antd";
import { Link , useNavigate } from "react-router-dom";
import { loginUserAPI } from "../services/api.service";
import { useContext, useState } from 'react';
import { AuthContext, AuthWrapper } from "../components/context/auth.context";


const LoginPage = () => {
    const [form] = Form.useForm();
    const [isLoading , setLoading] = useState(false) ;
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext) ;
    

    const onFinish = async (value) => {
        setLoading(true)
        const res = await loginUserAPI(value.email , value.password);

        if ( res.data ) {
            message.success("Đăng nhập thành công") ;
            localStorage.setItem("access_token" , res.data.accessToken)
            setUser(res.data.userLogin);
            navigate("/")
        }
        else {
            notification.error ({
                message: "Lỗi đăng nhập" ,
                description: JSON.stringify(res.error)
            })
        }
        setLoading(false)
    }

    return (
        <div style={{ maxWidth: "500px", margin: "40px auto" }}>
            <fieldset style={{ padding: "30px", border: "1px solid #ccc", borderRadius: "8px" }}>
                <legend style={{ padding: "0 10px"}}>
                    Đăng nhập
                </legend>

                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Email không được để trống' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Mật khẩu không được để trống' }]}
                    >
                        <Input.Password onKeyDown={(event) => {
                            if( event.key === 'Enter') form.submit()
                        }}/>
                    </Form.Item>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Button
                            loading={isLoading}
                            type="primary"
                            onClick={() => form.submit()}
                        >
                            Đăng nhập
                        </Button>

                        <Link to="/">Trang chủ</Link>
                    </div>

                    <div style={{ textAlign: "center", marginTop: 40 }}>
                        Chưa có tài khoản?
                        <Link to="/register"> Đăng kí tại đây</Link>
                    </div>

                </Form>
            </fieldset>
        </div>
    );
};

export default LoginPage;