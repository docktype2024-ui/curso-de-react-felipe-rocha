
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import './App.css'
import { useState } from "react"
import {v4} from 'uuid'


function App() {
  const [tasks,setTasks] = useState([{
    id:1,
    title:'Estudar programacao',
    description: 'Estudar programcao para se tornar um desenvolvedor fullstack',
    isCompleted:false,
  },
  {
    id:2,
    title:'Estudar ingles',
    description: 'Estudar ingles para se tornar fluente',
    isCompleted:false,
  },
  {
    id:3,
    title:'Estudar matematica',
    description: 'Estudar matematica para se tornar fluente',
    isCompleted:false,
  },
])

function onTaskClick(taskId){
  const newTasks = tasks.map(task => {
    //Preciso atualizar a tarefa
    if (task.id === taskId){
      return { ...task, isCompleted: !task.isCompleted }
    }

    //Nao preciso atualizar a tarefa
    return task
  })

  setTasks(newTasks)
}

function deleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
}

function onTaskSubmit(title,description){
  const newTask = {
    id: v4(),
    title: title,
    description:description,
    isCompleted:false,
  }
  setTasks([...tasks , newTask])
}

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de tarefas</h1>
        <AddTask onTaskSubmit={onTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTaskClick={deleteTaskClick}/>
      </div>   
    </div>
  )
}

export default App
