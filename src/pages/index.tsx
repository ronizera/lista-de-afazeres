import { useState } from "react";


type Tarefa = {
  id: number,
  texto: string
  concluida?: boolean
}

export default function Home() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [input, setInput] = useState<string>("")

  const adicionarTarefas = () => {
    if(input.trim() === "") return
    setTarefas([...tarefas, {id: Date.now(), texto: input}])
  }

  const removerTarefa = (id: number) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
  }

  const alternarTarefa = (id: number) => {
    setTarefas(tarefas.map((tarefa) => tarefa.id === id ? {...tarefa, concluida: !tarefa.concluida} : tarefa))
  }


  return (
    <div>
      <div>
        <h1>To-do</h1>
        <input type="text" placeholder="Digite aqui" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={adicionarTarefas}>Adicionar</button>
      </div>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}> <span>{tarefa.texto}</span>
          <button onClick={() => alternarTarefa(tarefa.id)}>{ tarefa.concluida ? "Desfazer" : "Concluida"}</button>
          <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>

    
  );
}
