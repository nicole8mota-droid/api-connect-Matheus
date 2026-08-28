let users = [
    {
        id: 1,
        name: "Naiara",
        email: "naiara@email.com"
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
