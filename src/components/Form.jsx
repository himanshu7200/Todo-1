import { useEffect, useState } from "react"

const Form = ({ addTodo, edit, updateTodo }) => {


  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit.editMode) {
      console.log(edit)
      updateTodo(edit.oldTodo.id, text)
     
    } else {
      addTodo(text);
    }

    setText("")
  };
  useEffect(() => {
    setText(edit.oldTodo.text)
  }, [edit])

  return (
    <form className="my-3" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Enter Text Here..." className="form-control rounded-0"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required />
      <button className="btn btn-primary rounded-0 w-100 my-3">Save</button>
    </form>
  )
}
export default Form;