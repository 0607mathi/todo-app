import React, { useState } from 'react'
import './Todo.css'
import todo from "../assets/To do list-bro.png"
import Done from '../assets/check.png'
import Cross from '../assets/cross.png'
const Todo = () => {
    const [strick,setStrick]=useState()
    const [data,setData]=useState([])
    var ans="";
    console.log(data[0]);
    console.log(data.length);
  return (
    <div className='todo-container'>

        <h2 className=''>Todo App</h2>

        <img src={todo} className='todo-img' alt="Todo img" />

        <div className='input-btn'>
            <input type="text" name="user-data" id="user-data" placeholder='Enter your task...!' onChange={(e)=>{ans=(e.target.value)}}/>
            <button onClick={()=>setData([...data,ans])}>Add</button>
        </div>

        <div className="list">
            <ul className=''>
                <li className=''>
                    <div className='list-data'>
                        <span className={strick}>Todo app</span>
                        <img src={Done} onClick={()=>setStrick("strick")} alt="done" />
                        <img src={Cross} alt="clear" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Todo