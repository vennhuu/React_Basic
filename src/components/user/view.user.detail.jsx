import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { updateUserAvatarAPI, uploadAvatarAPI } from "../../services/api.service";

const ViewUserDetail = (props) => {

    const {showDrawer , setShowDrawer , dataDetail , setDataDetail , loadUser} = props ;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview , setPreview] = useState(null)

    const handleOnchangeFile = (event) => {
        if ( !event.target.files || event.target.files.length === 0) {
            setSelectedFile(null)
            setPreview(null)
            return;
        }
        const file = event.target.files[0];
        if(file) {
            setSelectedFile(file)
            setPreview(URL.createObjectURL(file))
        }
    }
    
    const handleUpdateUserAvatar = async () => {

        const resUpload = await uploadAvatarAPI(selectedFile,"avatar")

        if(resUpload.data){

            const newAvatar = resUpload.data.fileName

            const resUpdateAvatar = await updateUserAvatarAPI(
                dataDetail.id,
                newAvatar
            )

            if(resUpdateAvatar.data){
                notification.success({
                    message:"Cập nhật avatar",
                    description:"Thành công"
                })

                setPreview(null)
                setSelectedFile(null)

                // reload danh sách user
                await loadUser()

                // đóng drawer
                setShowDrawer(false)
                setDataDetail(null)
            }
        }
    }
    return (
        <Drawer
            title="Thông tin người dùng"
            closable={{ 'aria-label': 'Close Button' }}
            onClose={() => {
                setDataDetail(null)
                setShowDrawer(false)
            }}
            open={showDrawer}
        >
            {dataDetail ?
            <>
                <p>ID: {dataDetail.id}</p>
                <p>Họ và tên: {dataDetail.name}</p>
                <p>Email: {dataDetail.email}</p>
                <p>Số điện thoại: {dataDetail.phoneNumber}</p>
                <p>Avatar: </p>
                <div style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    overflow: "hidden"
                    }}>
                    <img
                        src={`${import.meta.env.VITE_BACKEND_URL}/storage/avatar/${dataDetail.avatar}`}
                        style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{
                        display:"block" ,
                        width: "fit-content" ,
                        marginTop: "15px" , 
                        padding : "5px 10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor:"pointer"
                    }}>Tạo avatar</label>
                    <input 
                        type="file" hidden id="btnUpload"
                        onChange={handleOnchangeFile}
                    />
                </div>
                { preview &&
                    <>
                    <div style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        overflow: "hidden"
                    }}>
                        <img
                            src={preview}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover"
                            }}
                        />
                    </div>
                    <Button type='primary' onClick={() => handleUpdateUserAvatar()}>Lưu</Button>
                    </>
                }
            </>
            :
            <>
                <p>Không có dữ liệu</p>
            </>
            }
        </Drawer>
    )
}

export default ViewUserDetail;