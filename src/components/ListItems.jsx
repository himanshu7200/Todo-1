const ListItems = ({ todo , deleteTodo, editTodo}) => {
    return (
        <li className="list-group-item rounded-0">{todo.text}
            <span className="float-end">
                <button className="btn btn-warning rounded-0" onClick={()=>editTodo(todo)}>Edit</button>
                <button className="btn btn-danger rounded-0 ms-2" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </span>
        </li>
    )
}
ListItems.defaultProps = {
    name: 'Default name'
}
export default ListItems;