let users = [
    {
        id: 1,
        name: "Matheus",
        email: "matheus@email.com"
    }
];

let nextId = 2;

function generateId() {
    return nextId++;
}

module.exports = {
    users,
    generateId
};
