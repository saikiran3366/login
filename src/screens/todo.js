import React,{useState} from 'react';
import TextField from '@mui/material/TextField'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell, faPlusSquare,faCheckSquare,faTrash} from '@fortawesome/free-solid-svg-icons'


const TodoApp =() =>{
    const [text,setText] = useState("")
    const [todo,setTodo] = useState ([])

    const handleAdd = () =>{
        if (text != "") {
            setTodo([...todo,text].reverse())
            setText ("")
           
        }else {
            alert('enter your todo') 
            }
        }
        
    const handleDelete = (item) =>{
        setTodo(todo.filter(e => e !==item))
        console.log(item,"check")
    }

    console.log(todo,"check this todo");

    return(
        <div>
            <div style={{height:750,background: "linear-gradient( #9198e5,#e66465)",display:'flex',flexDirection:'column',alignItems:'center'}}>
                <h1  style ={{fontFamily: 'Pacifico',fontSize:'300%',color:"black",margin:0,}}>
                    Todo List
                </h1>
                <div style={{margin:0,display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <TextField  
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                        id="outlined-basic" 
                        type="text"  
                        size="small" 
                        label="EnterTodo" 
                        style={{width:350}} 
                    />
                    <FontAwesomeIcon 
                    onClick={handleAdd}
                    style={{paddingLeft:20,}}
                    size="3x" icon= {faPlusSquare} 
                    ></FontAwesomeIcon>
                </div>

                <div style={{height:600,width:420,backgroundColor:"linear-gradient( #9198e5,#e66465)",display:'flex',flexDirection:'column',  overflowY: 'scroll',scrollBarHidden:'true',webkitScrollBarHidden:'none'}}>
                {todo.map((item)=>{
                    return( 
                        <div style={{paddingTop:50,display:'flex',flexDirection:'row'}}>
                        <div style={{height:50,width:300,backgroundColor:'white',borderRadius:10,border:'2px solid black',alignItems:'center',display:'flex'}}>
                            <h1>{item}</h1>
                        </div>
                        
                            <div style={{display:'flex',flexDirection:"row",alignItems:'center'}}>
                            
                            <FontAwesomeIcon onClick={()=>{handleDelete(item)}} style={{paddingLeft:20,}}size="2x" icon= {faTrash} ></FontAwesomeIcon>
                            </div>
                            
                    </div>
                 ) 
                })} 
                </div>

                
            </div>
            
        </div>
        )
}

export default TodoApp;