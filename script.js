import dataConnection from './dataConnection.js';

window.onload = async () => {
    const projects = await dataConnection.fetchProjects();

    console.log(`window.onload= ~ projects`, projects);
};
