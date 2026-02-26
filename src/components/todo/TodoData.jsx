
const TodoData = (props) => {
    console.log(props)
    return(
    <div className='todo-data'>
        <div>My name is: {props.name}</div>
        <div>Learning React</div>
        <div>Watching YTB</div>
    </div>
    );
}
export default TodoData;