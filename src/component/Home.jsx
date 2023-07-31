import React, { useEffect, useState } from 'react'
import Task from './Task'



const Home = () => {


    const initialArray = localStorage.getItem("Tasks")
        ? JSON.parse(localStorage.getItem("Tasks"))
        : [];



    const [Tasks, setTasks] = useState(initialArray);
    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");
    console.log(title, description);

    const submithandler = (e) => {
        e.preventDefault();
        setTasks([...Tasks, {
            title, description
        }])
       setTitle("");
       setDescription("");
    }

    const deleteTasks = (index) => {
        const filterdArr = Tasks.filter((val, i) => {
            return i !== index;
        });

        console.log(filterdArr);
        setTasks(filterdArr);
    }

    useEffect(() => {
        localStorage.setItem("Tasks", JSON.stringify(Tasks));
    }, [Tasks])

    return (
        <div
            className='container'
        >
            <h1> Daily Goals </h1>
            <form onSubmit={submithandler}>
                <input type='Text' placeholder='Title'
                    value={title} onChange={(e) => setTitle(e.target.value)} />

                <textarea placeholder='Discripton'

                    value={description} onChange={(e) => setDescription(e.target.value)} />

                <button type='Submit'>Add </button>
            </form>

            {Tasks.map((item, index) => {
                return (
                    <Task key={index} title={item.title} description={item.description}
                        deleteTasks={deleteTasks}
                        index={index} />

                )
            }
            )}
        </div>

    )
}

export default Home