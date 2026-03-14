import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/Todonew'
import reactLogo from './assets/react.svg'
import { useContext, useEffect, useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
import { getAccountAPI } from './services/api.service'
import { AuthContext } from './components/context/auth.context'
import { Spin } from 'antd';

// () => {}
// component = html + css + js

// const ParentComponent = (props) => {
//   return (
//     <>
//       <div>Parent Component</div>
//       {props.children}
//     </>
//   )
// }

// const ChildComponent = (props) => {
//   return (
//     <div>Child Component</div>
//   )
// }

const App = () => {

  const { setUser , isAppLoading , setIsLoading} = useContext(AuthContext) ;

  useEffect(() => {
    fetchUserInfo() ;
  }, [])

  const fetchUserInfo = async () => {
  try {
    const res = await getAccountAPI()

    if (res?.data?.user) {
      setUser(res.data.user)
    }

  } catch (error) {
    // nếu chưa login thì bỏ qua
    console.log("User chưa đăng nhập")
  }

  setIsLoading(false)
}
  return (
    <>
      { isAppLoading === true ? 
        <div style={{
          position: "fixed" ,
          top: "50%" ,
          left: "50%" ,
          transform: "translate(-50%, -50%)" ,
        }}>
          <Spin/>
        </div>
        :
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
      }
    </>
  )
}

export default App
