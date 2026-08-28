const { users, generateId } = require('../data/users');

// Listar todos os usuários
function getUsers(req, res) {
    return res.status(200).json({
        data: users
    });
}

// Buscar usuário por ID
function getUserById(req, res) {
    const id = parseInt(req.params.id);

    const user = users.find(user => user.id === id);

    if (!user) {
        return res.status(404).json({
            error: 'Usuário não encontrado.'
        });
    }

    return res.status(200).json({
        data: user
    });
}

// Cadastrar novo usuário
function createUser(req, res) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: 'Nome e e-mail são obrigatórios.'
        });
    }

    const newUser = {
        id: generateId(),
        name,
        email
    };

    users.push(newUser);

    return res.status(201).json({
        data: newUser
    });
}

// Atualizar usuário
function updateUser(req, res) {
    const id = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Usuário não encontrado.'
        });
    }

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            error: 'Nome e e-mail são obrigatórios.'
        });
    }

    users[index] = {
        id,
        name,
        email
    };

    return res.status(200).json({
        data: users[index]
    });
}

// Remover usuário
function deleteUser(req, res) {
    const id = parseInt(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({
            error: 'Usuário não encontrado.'
        });
    }

    users.splice(index, 1);

    return res.status(204).send();
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
