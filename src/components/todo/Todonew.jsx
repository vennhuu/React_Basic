
const TodoNew = (props) => {
    console.log("Check" ,props)
    const {addNewTodo} = props ;

    addNewTodo("Venn")
    return(
        <div className="todo-new">
        <input type="text" />
        <button>Add</button>
      </div>
    );
}
export default TodoNew