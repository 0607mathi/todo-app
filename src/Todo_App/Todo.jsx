import React, { useEffect, useState } from 'react'
import './Todo.css'
import todo from "../assets/To do list-bro.png"
import Done from '../assets/check.png'
import Cross from '../assets/cross.png'
const Todo = () => {
    const [strick,setStrick]=useState(false)
    const [data,setData]=useState("")
    const [arr,setArr]=useState([])
    // console.log(arr)
    // console.log(arr.length)
    const GetData = ()=>{
        // console.log(data)
        if(data!=""){
            setArr([...arr, {id:arr.length,task:data,completed:false}])
            setData("")
        }
        else alert("enter a task!")
    }
    const toggleComplete = (id) => {
        setArr(prevArr => prevArr.map(item => item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const RemoveTask = (id)=>{
        arr.map(item=>{
            if(item.id===id) arr.filter()

        })
    }
    
  return (
    <div className='todo-container'>

        <h2 className=''>Todo App</h2>

        <img src={todo} className='todo-img' alt="Todo img" />

        <div className='input-btn'>
            <input type="text" name="user-data" id="user-data" placeholder='Enter your task...!' onChange={(e)=>{setData(e.target.value)}} value={data}/>
            <button className='' onClick={()=>GetData()}>Add</button>
        </div>

        <div className="list">
            <ul className=''>
               {
                arr.map((items,index)=>{
                    return(
                        <li className='' key={index}>
                        <div className='list-data'>
                            <span className={(items.completed)?"strick":""}>{items.task}</span>
                            <img className='' src={Done} onClick={() => toggleComplete(items.id)} alt="done" />
                            <img className='' src={Cross} onClick={()=>RemoveTask(items.id)} alt="clear" />
                        </div>
                    </li>
                    )
                   }
                )
               }
            </ul>
        </div>

        <button className='addbtn' onClick={()=>{setArr([])} }>Clear</button>
    </div>
  )
}

export default Todo