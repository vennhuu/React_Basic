
const TodoData = (props) => {
    const {todoList , deleteToDo} = props;

    const handleDelete = (id) =>{
        alert(id) ;
        deleteToDo(id);
    }
    return(
    <div className='todo-data'>
        {todoList.map((item , index) => {
            return (
                <div className="todo-item" key={item.id}>
                    <div>{item.name}</div>
                    <button style={{cursor: "pointer"}} onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            )
        })}
    </div>
    );
}
export default TodoData;