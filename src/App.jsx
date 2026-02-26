import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/Todonew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from 'react-router-dom'
// () => {}
// component = html + css + js
const App = () => {

  const [todoList , setTodoList] = useState([

  ]) ;

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomId(1 , 1000000),
      name: name
    }

    setTodoList([...todoList , newTodo])
  }

  const deleteToDo = (id) => {
    const newToDo = todoList.filter(item => item.id !== id);
    setTodoList(newToDo);
  }

  const randomId = (min ,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <>
    <Header/>
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
         addNewTodo={addNewTodo}
      />
      {
        todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteToDo={deleteToDo}
        /> : 
        <div className='todo-image'>
          <img src={reactLogo} className="logo" />
        </div>
      }
    </div>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
