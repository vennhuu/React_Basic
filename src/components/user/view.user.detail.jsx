import { Button, Drawer } from "antd";

const ViewUserDetail = (props) => {

    const {showDrawer , setShowDrawer , dataDetail , setDataDetail} = props ;

    console.log("Data Detail" , dataDetail)
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
                    <label htmlFor="btnUpload">Tạo Avatar</label>
                    <input type="file" hidden id="btnUpload"/>
                </div>
                {/* <Button type='primary'>Tạo Avatar</Button> */}
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