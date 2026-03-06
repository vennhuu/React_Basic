import { Input, Modal } from "antd";
import { useState } from "react";

const UpdateUserModal = () => {

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
            resetAndCloseModal()
            await loadUser() ;
        }
        else {
            notification.error({
                message:"Create fail" ,
                description: JSON.stringify(res.message)
            })
        }
    }
    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhoneNumber("")
    }
    
    return (
        <Modal
                title="Cập nhật người dùng"
                open={isModalOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                okText={"Cập nhật"}
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
    )
}
export default UpdateUserModal