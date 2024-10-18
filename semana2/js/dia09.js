// Dia 09 - Exercício criar uma lista de tarefas a partir de um array em JS

let tarefas = []

// Função para adicionar uma tarefa
function adicionarTarefa() {
    
    const tarefaInput = document.getElementById('tarefaInput').value
    
    if (tarefaInput) {
        tarefas.push(tarefaInput)
        atualizarLista()
        document.getElementById('tarefaInput').value = ''
    } else {
        alert("Por favor, digite uma tarefa.")
    }
}

    function removerTarefa(index) {
        tarefas.splice(index, 1)
        atualizarLista()
    }

    function atualizarLista() {
        const lista = document.getElementById('listaTarefas')

        lista.innerHTML = ''
        tarefas.forEach((tarefa, index) => {
            const li = document.createElement('li')
            li.innerHTML = `${tarefa} <button onClick="removerTarefa(${index})">Remover</button>`
            lista.appendChild(li)
        })
    }
