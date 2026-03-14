import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {

    const {isModalUpdateOpen , setIsModalUpdateOpen , dataUpdate , setDataUpdate , loadUser} = props ;

    const [id , setId] = useState("") ;
    const [fullName , setFullName] = useState("") ;
    const [email , setEmail] = useState("") ;
    const [phoneNumber , setPhoneNumber] = useState("") ;
    const [password , setPassword] = useState("") ;

    useEffect(() => {
        if(dataUpdate) {
            setId(dataUpdate.id)
            setFullName(dataUpdate.name)
            setEmail(dataUpdate.email)
            setPhoneNumber(dataUpdate.phoneNumber)
        }
    }, [dataUpdate])

    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id , fullName, email, phoneNumber) ;
        if ( res.data){
            notification.success({
                message:"Cập nhật người dùng" ,
                description: "Cập nhật thành công"
            })
            setDataUpdate
            resetAndCloseModal()
            await loadUser() ;
        }
        else {
            notification.error({
                message:"Cập nhật thất bại" ,
                description: JSON.stringify(res.message)
            })
        }
    }
    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName("")
        setEmail("")
        setPassword("")
        setPhoneNumber("")
        setDataUpdate(null)
    }

    return (
        <Modal
                title="Cập nhật người dùng"
                open={isModalUpdateOpen}
                onOk={() => handleSubmitBtn()}
                onCancel={() => resetAndCloseModal()}
                okText={"Cập nhật"}
                cancelText={"Hủy"}
            >
                <div style={{ display: "flex", gap: "15px", flexDirection: "column"}}>
                    <div>
                    <span>ID</span>
                    <Input
                        value={id}
                        disabled
                    />
                </div>
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
            </div>
            </Modal>
    )
}
export default UpdateUserModal