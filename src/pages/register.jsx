import { Button, Form, Input, notification } from "antd";
import { registerUserAPI } from "../services/api.service";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {

        // call values.
        const res = await registerUserAPI (
            values.fullName ,
            values.email,
            values.password,
            values.phone
        )
        if ( res.data ) {
            notification.success({
                message:"Đăng kí người dùng" ,
                description:"Đăng kí người dùng thành công"
            })
            navigate("/login")
        }
        else {
            notification.error({
                message:"Đăng kí người dùng thất bại" ,
                description: JSON.stringify(res.message)
            })
        }
    }
    return (
        <div className="user-form" style={{margin: "20px 0"}}>
            <strong style={{ textAlign: "center", display: "block" }}>
                Đăng kí tài khoản
            </strong>
            <Form
                form={form}
                layout="vertical"

                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                style={{ maxWidth: "600px", margin: "0 auto" }}
            >
                <div style={{ margin: "50px"}}>
                    <Form.Item
                        label="Họ và tên"
                        name="fullName"
                        rules={[{ required: true, message: 'Họ và tên không được để trống' }]}
                    >
                        <Input />
                    </Form.Item>
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
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        rules={[
                            { 
                                required: true, 
                                message: 'Số điện thoại không được để trống!' 
                            },
                            {
                                required: true,
                                pattern: new RegExp(/\d+/g),
                                message: "Sai định dạng!"
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Button
                        onClick={() => form.submit()}
                        type='primary'>Đăng kí
                    </Button>
                    <div style={{ textAlign: "center", display: "block" }}>
                        Đã có tài khoản?
                        <Link to="/login"> Đăng nhập tại đây</Link>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default RegisterPage;