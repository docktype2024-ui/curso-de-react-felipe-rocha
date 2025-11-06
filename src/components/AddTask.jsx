import { useState } from "react";
import Input from "./Input";

function AddTask({onTaskSubmit}) {
    const [title , setTittle] = useState("")
    const [description , setDescription] = useState("")
    return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={() => setTittle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descricao da tarefa"
        value={description}
        onChange={() => setDescription(event.target.value)}
      />
      <button onClick={() => {
        //Verificar se o titulo e a descricao estao preenchidos
        if (!title.trim() || !description.trim()){
            return alert("Preenche o titulo e a descricao da tarefa")
        }
        
        onTaskSubmit(title , description)
        setTittle("")
        setDescription("")
      }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">Adicionar</button>
    </div>
  );
}

export default AddTask;
