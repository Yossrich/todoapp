import { useState } from 'react'
import './App.css'

function Todo() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editId,setEditId] = useState(0)
  const handlechange= (e)=>{
    setTodo(e.target.value)
  }
  const handlesubmit= (e)=>{
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i)=> i.id === editId);
      const updatedTodo = todos.map ((t)=>
      t.id === editTodo.id
      ?(t = {id : t.id ,todo})
      :{i:t.id ,todo: t.todo}
      );
      setTodos(updatedTodo)
      setEditId(0)
      setTodo("")
      return;
    }

    if (todo !==""){
  setTodos([...todos,{id: '$(todo)-${date.now()}', todo }])
setTodo("");
    }
  };
  const deleteHandler=(id)=>{
    const delTodo= todos.filter((to) => to.id !== id)
    setTodos([...delTodo])
  }
const editHandler= (id)=>{
  const editTodo= todos.find((i)=>i.id===id)
  setTodo(editTodo.todo)
  setEditId(id)
}
  return (
    <>
      <div className='container bg-dar1 text-center'>
        <form onSubmit={handlesubmit}>
        <input className='formcontrolmt-3 ' type="text" placeholder='enter todo ...' onChange={handlechange}  value={todo}/>
        <br></br>
        <br></br>
      
        <button className='btn'>
          add todo!
        </button>
        </form>
      
      <div>
        {todos.map((t)=>{
          return (
            <>
            <div className='container bg-info mt-2'> 
            <p className='todo' key={t.id}> 
            {t.todo}
            </p>
            <button onClick={() => deleteHandler(t.id)}
            className='btn btn-danger mx-2'>
              Delete
            </button>
            <button className='btn btn-primary' 
            onClick={()=>editHandler(t.id)}
            > 
            Edit</button>
            </div>
            </>
          );
        })}
      </div>
        
      </div>
      
    </>
  )
}

export default Todo;
