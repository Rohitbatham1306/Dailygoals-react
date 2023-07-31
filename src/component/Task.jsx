import React from 'react'

const Task = ({ title , description , deleteTasks , index  }) => {
  return (
    <div  className='Task'>
        
   <div> 
    <p>
        {title}
    </p>
    <span>{description}</span>
   </div>
   <button onClick= {()=> deleteTasks(index)}> -</button>
        </div>
  )
}

export default Task