import clientSideDummyData from './clientSideDummyData.js';

const dataConnection = {
    fetchProjects,
};

export default dataConnection;

// Methods

async function fetchProjects() {
    // const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    // console.log(`fetchProjects ~ todos`, todosResponse);

    // const todos = await todosResponse.json();
    // console.log(`fetchProjects ~ todos`, todos);

    // return todos;
    return new Promise((resolve, reject) => resolve(clientSideDummyData.projects));
}
