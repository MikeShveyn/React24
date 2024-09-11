import {useState} from 'react'

export function NewTask({onAdd}) {
    const [eneterdTask, setEnteredTask] = useState('')

    const handleInput = (event) => {
        setEnteredTask(event.target.value)
    }

    const handleClick = () => {
        if(eneterdTask.trim() === "") return;
        onAdd(eneterdTask)
        setEnteredTask('');
    }

    return <div className="flex items-center gap-4">
        <input type="text" onChange={handleInput} value={eneterdTask} className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
        <button 
         onClick={handleClick}
         className="text-stone-700 hover:text-stone-950">
            Add Task
        </button>
    </div>
}