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

  const { setUser } = useContext(AuthContext) ;

  useEffect(() => {
    fetchUserInfo() ;
  }, [])

  const fetchUserInfo = async() => {
    const res = await getAccountAPI()
    if ( res.data.user ) {
      //success
      setUser(res.data.user)
      
    }
  }
  return (
    <>
    {/* <ParentComponent>
      Inside Parent Components
    </ParentComponent> */}
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
