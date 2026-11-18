
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const supabase = require('./supabase');

const app = express();

app.use(cors({
    origin: 'https://miniature-goggles-r49q775x497jcxqjw-5500.app.github.dev',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Rota inicial
app.get('/', (req, res) => {
    res.json({
        mensagem: 'API To Do funcionando!'
    });
});

// Consultar todas as tarefas
app.get('/tarefas', async (req, res) => {
    const { data, error } = await supabase
        .from('tarefas')
        .select('*');

    if (error) {
        return res.status(500).json({
            erro: error.message
        });
    }

    res.json(data);
});

// Excluir uma tarefa
app.delete('/tarefas/:id', async (req, res) => {
    const { id } = req.params;

    const { data, error } = await supabase
        .from('tarefas')
        .delete()
        .eq('id', id)
        .select();

    if (error) {
        return res.status(500).json({
            erro: error.message
        });
    }

    if (!data || data.length === 0) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        });
    }

    res.json({
        mensagem: 'Tarefa excluída com sucesso!'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

// Cadastrar uma nova tarefa
app.post('/tarefas', async (req, res) => {
    const { title, completed } = req.body;

    const { data, error } = await supabase
        .from('tarefas')
        .insert([
            {
                title: title,
                completed: completed ?? false
            }
        ])
        .select();

    if (error) {
        return res.status(500).json({
            erro: error.message
        });
    }

    res.status(201).json(data);
});

// Atualizar uma tarefa
app.put('/tarefas/:id', async (req, res) => {
    const { id } = req.params;
    const { title, completed } = req.body;

    const { data, error } = await supabase
        .from('tarefas')
        .update({
            title: title,
            completed: completed
        })
        .eq('id', id)
        .select();

    if (error) {
        return res.status(500).json({
            erro: error.message
        });
    }

    if (!data || data.length === 0) {
        return res.status(404).json({
            erro: 'Tarefa não encontrada'
        });
    }

    res.json(data);
});

