import { Button, Result } from "antd";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../components/context/auth.context";

const PrivateRoute = (props) => {

    const { user , setUser } = useContext(AuthContext) ;

    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    // return (<Navigate to="/login" replace/>)

    return (
        <>
        <Result
            status="403"
            title="Unauthorized"
            subTitle={"Bạn cần đăng nhập"}
            extra={<Button type="primary">
                <Link to="/">
                    <span>Back to homepage</span>
                </Link>
            </Button>}
        />
        </>
    )
}

export default PrivateRoute