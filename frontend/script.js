
const API_URL = 'https://miniature-goggles-r49q775x497jcxqjw-3000.app.github.dev';

const formulario = document.getElementById('form-tarefa');
const campoTitulo = document.getElementById('titulo');
const listaTarefas = document.getElementById('lista-tarefas');

// Buscar tarefas
async function carregarTarefas() {
    const resposta = await fetch(`${API_URL}/tarefas`);
    const tarefas = await resposta.json();

    listaTarefas.innerHTML = '';

    tarefas.forEach(tarefa => {
        const item = document.createElement('li');

        const titulo = document.createElement('span');
        titulo.textContent = tarefa.title;

        if (tarefa.completed) {
            titulo.classList.add('concluida');
        }

        titulo.addEventListener('click', () => {
            atualizarTarefa(tarefa);
        });

        const botaoExcluir = document.createElement('button');
        botaoExcluir.textContent = 'Excluir';

        botaoExcluir.addEventListener('click', () => {
            excluirTarefa(tarefa.id);
        });

        item.appendChild(titulo);
        item.appendChild(botaoExcluir);

        listaTarefas.appendChild(item);
    });
}

// Adicionar tarefa
formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const title = campoTitulo.value.trim();

    if (!title) return;

    await fetch(`${API_URL}/tarefas`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            completed: false
        })
    });

    campoTitulo.value = '';
    carregarTarefas();
});

// Atualizar tarefa
async function atualizarTarefa(tarefa) {
    await fetch(`${API_URL}/tarefas/${tarefa.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: tarefa.title,
            completed: !tarefa.completed
        })
    });

    carregarTarefas();
}

// Excluir tarefa
async function excluirTarefa(id) {
    await fetch(`${API_URL}/tarefas/${id}`, {
        method: 'DELETE'
    });

    carregarTarefas();
}

// Carregar ao abrir a página
carregarTarefas();
