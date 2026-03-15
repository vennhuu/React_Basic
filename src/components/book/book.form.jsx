import { Button } from "antd";

const BookForm = () => {
    return (
        <div style={{margin: "50px" ,  display: "flex", justifyContent: "space-between"}}>
            <h3>Danh sách sách</h3>
            <Button type="primary">Thêm sách mới</Button>
        </div>
    )
}
export default BookForm;