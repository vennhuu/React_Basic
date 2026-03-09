import { Button, Form, Input } from "antd";

const RegisterPage = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("CHekc vlaue" , values)
    }
    return (
        <div className="user-form" style={{margin: "20px 0"}}>
            <Form
                form={form}
                layout="vertical"

                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
            >
                <div style={{ margin: "50px"}}>
                    <Form.Item
                        label="Họ và tên"
                        name="fullName"
                        // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        name="phone"
                        // rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Button 
                        onClick={() => form.submit()}
                        type='primary'>Đăng kí
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default RegisterPage;