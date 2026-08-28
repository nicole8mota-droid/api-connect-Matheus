const express = require('express');

const router = express.Router();

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// GET - Listar todos os usuários
router.get('/users', getUsers);

// GET - Buscar usuário por ID
router.get('/users/:id', getUserById);

// POST - Cadastrar usuário
router.post('/users', createUser);

// PUT - Atualizar usuário
router.put('/users/:id', updateUser);

// DELETE - Remover usuário
router.delete('/users/:id', deleteUser);

module.exports = router;
