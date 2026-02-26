import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/Todonew'
import reactLogo from './assets/react.svg'
import { useState } from 'react'
// () => {}
// component = html + css + js
const App = () => {

  const [todoList , setTodoList] = useState([
    {id: 1 , name: "Learn React"},
    {id: 2 , name: "Watch YTB"}
  ]) ;
  const venn = "Venn"
  const age = 25
  const address = {
    address:"Hanoi" , 
    country:"VietNam"
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomId(1 , 1000000),
      name: name
    }

    setTodoList([...todoList , newTodo])
  }

  const randomId = (min ,max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
         addNewTodo={addNewTodo}
      />
      <TodoData
        name={venn}
        age={age}
        data={address}
        todoList={todoList}
      />
      <div className='todo-image'>
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  )
}

export default App
