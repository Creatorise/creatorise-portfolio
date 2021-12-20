import client_side_dummy_data from './client_side_dummy_data.js';

const data_connection = {
    fetch_projects,
};

export default data_connection;

// Methods

async function fetch_projects() {
    // const todosResponse = await fetch('https://jsonplaceholder.typicode.com/todos');
    // console.log(`fetchProjects ~ todos`, todosResponse);

    // const todos = await todosResponse.json();
    // console.log(`fetchProjects ~ todos`, todos);

    // return todos;
    return new Promise((resolve, reject) => resolve(client_side_dummy_data.projects));
}
