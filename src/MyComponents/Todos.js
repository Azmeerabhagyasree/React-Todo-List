import React from 'react'
import TodoItems from "./TodoItems";
const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
}
return (
    <div className="container" style={myStyle}>
        <h3 className= "text-center my-3">Todos List</h3>
        {props.todos.length===0? "No Todos till now to display":  
        props.todos.map((todo)=>{
            console.log(todo.sno);
            return (<TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
            )
        })
          } 
    </div>
)
}

export default Todos;




