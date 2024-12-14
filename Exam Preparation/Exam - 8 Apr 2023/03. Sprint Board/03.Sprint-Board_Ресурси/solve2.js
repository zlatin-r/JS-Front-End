const baseUrl = 'http://localhost:3030/jsonstore/tasks'
const endpoints = {
    update: (id) => `${baseUrl}/${id}`,
    delete: (id) => `${baseUrl}/${id}`,
}