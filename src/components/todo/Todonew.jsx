import { useState } from "react";

const TodoNew = (props) => {

    //useStateHook(getter ,setter)
    const [valueInput, setValueInput] = useState("")

    const {addNewTodo} = props ;

    // addNewTodo("Venn")
    const handleClick = () => {
        console.log("CHECK valueInput: " , valueInput )
    }

    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return(
      <div className="todo-new">
        <input type="text" onChange={(event) => handleOnChange(event.target.value)}/>
        <button style={{cursor: "pointer"}} onClick={handleClick}>Add</button>
        <div>My text is: {valueInput}</div>
      </div>
    );
}
export default TodoNew