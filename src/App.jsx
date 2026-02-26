import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/Todonew'
import reactLogo from './assets/react.svg'
// () => {}
// component = html + css + js
const App = () => {

  const venn = "Venn"
  const age = 25
  const address = {
    address:"Hanoi" , 
    country:"VietNam"
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
        name={venn}
        age={age}
        data={address}
      />
      <div className='todo-image'>
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  )
}

export default App
