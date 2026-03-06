import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
import axios from "axios";

const UserForm = () => {
    
    const [fullName , setFullName] = useState("") ;
    const [email , setEmail] = useState("") ;
    const [phoneNumber , setPhoneNumber] = useState("") ;
    const [password , setPassword] = useState("") ;

    const [isModalOpen , setIsModalOpen] = useState(false);

    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phoneNumber) ;
        // console.log("Đã lưu" , {fullName , email , phoneNumber , password});
        console.log("Check data: ",  res.data) ;
        if ( res.data){
            notification.success({
                message:"Create a new user" ,
                description: "Tạo user thành công"
            })
            setIsModalOpen(false)
        }
        else {
            notification.error({
                message:"Create fail" ,
                description: JSON.stringify(res.message)
            })
        }
    }

    return (
        <div className="user-form" style={{margin: "20px 0"}}>
            <div style={{ display: "flex", justifyContent: "space-between"}}>
                <h3>Danh sách người dùng</h3>
                <Button type="primary" onClick={() => setIsModalOpen(true)}>Thêm người dùng</Button>
            </div>
            <Modal
                title="Tạo người dùng mới"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => setIsModalOpen(false)}
                okText={"Tạo"}
                cancelText={"Hủy"}
            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column"}}>
                <div>
                    <span>Họ và tên</span>
                    <Input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <span>Số điện thoại</span>
                    <Input
                        value={phoneNumber}
                        onChange={(event) => setPhoneNumber(event.target.value)}
                    />
                </div>
                <div>
                    <span>Mật khẩu</span>
                    <Input.Password
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
            </div>
            </Modal>
        </div>
    )
}
export default UserForm;
