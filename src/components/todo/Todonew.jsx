
const TodoNew = (props) => {
    console.log("Check" ,props)
    const {addNewTodo} = props ;

    // addNewTodo("Venn")

    const handleClick = () => {
        alert("click me");
    }

    const handleOnChange = (name) => {
        console.log("Check handle Onchange : " , name)
    }
    return(
        <div className="todo-new">
        <input type="text" onChange={(event) => handleOnChange(event.target.value)}/>
        <button style={{cursor: "pointer"}} onClick={handleClick}>Add</button>
      </div>
    );
}
export default TodoNew