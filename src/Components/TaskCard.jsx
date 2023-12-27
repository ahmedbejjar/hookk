import React from 'react'
import { useDispatch } from 'react-redux'
import { handleCopmlete, handleDelete } from '../redux/action';
import EditCard from './EditCard';

const TaskCard = ({task}) => {
    const dispatch=useDispatch();

  return (
    <div>
        <h1>{task.action}</h1>
        <button onClick={()=>dispatch(handleDelete(task.id))}>delete</button>
       <button onClick={()=>dispatch(handleCopmlete(task.id))}>{task.isDone?"Undo":"complete"}</button>
       <EditCard task={task}/>
        <hr/>
    </div>
  )
}

export default TaskCard