import Navbar from "./components/Navbar";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import { useState } from "react";


const App = () => {
 


  const [todos, setTodos] = useState([
  ])

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => {
      if (item.id !== id) {
        return true;
      }
    }))
  };

  const [edit, setEdit] = useState({
    oldTodo: {},
    editMode: false,
  })

  const addTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
    };
    setTodos([newTodo, ...todos]) 
  };

  const editTodo = (oldTodo) => {
    setEdit({
      oldTodo,
      editMode: true,
    })
  }

  const updateTodo = (oldId, newText) => {
    setTodos(
      todos.map((item) => item.id === oldId ? { id: oldId, text: newText } : item)
    );

    setEdit({
      oldTodo: {},
      editMode: false,
    });
  };

  return (
    <>
      <Navbar />
      {/* <h1 className="my-3 text-center">{count}</h1> */}
      {/* <button className="btn btn-success rounded-0 w-50 my-2" onClick={() => increaseValue()}>Increase</button>
      <button className="btn btn-danger rounded-0 w-50 my-2" onClick={() => decreaseValue()}>Decrease</button> */}
      <div className="container p-5">
        <Form addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
        <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>

    </>
  )
}


export default App;