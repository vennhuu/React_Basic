import { Table } from "antd";
import BookTable from "../components/book/book.table";
import BookForm from "../components/book/book.form";
import { fetchAllBookAPI } from "../services/api.service";
import { useEffect, useState } from "react";

const BookPage = () => {

    const [dataBooks , setDataBooks] = useState([]) ;
    const [current , setCurrent] = useState(1) ;
    const [pageSize , setPageSize] = useState(10) ;
    const [total , setTotal] = useState(0) ;

    useEffect(() => {
        loadBooks();
    }, [current , pageSize]);

    const loadBooks = async() => {
        const res = await fetchAllBookAPI(current , pageSize) ;
        if ( res.data ) {
            setDataBooks(res.data.result)
            setCurrent(res.data.meta.currentPage)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }
    }

    return (
        <>
            <BookForm/>
            <BookTable
                loadBooks={loadBooks}
                dataBooks={dataBooks}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}

            />
        </>
    )
}

export default BookPage;