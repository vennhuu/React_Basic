import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [form] = Form.useForm();

    const onFinish = (value) => {
        console.log("Check value" , value)
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
                        <Input.Password />
                    </Form.Item>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Button
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