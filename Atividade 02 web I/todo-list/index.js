const tarefasContainer = document.querySelector(".tarefas-container")

const adicionarNovaTarefa = () => {
  const input = document.querySelector("#titulo")

  const novaTarefa = document.createElement("p")
  novaTarefa.textContent = input.value

  tarefasContainer.append(novaTarefa)
  
  input.value = ""
}

const limpaTarefas = () => {
  tarefasContainer.innerHTML = ""
}