import dataConnection from './dataConnection.js';

window.onload = () => {
    renderProjects();
};

async function renderProjects() {
    const projects = await dataConnection.fetchProjects();

    const projectItems = projects.map(project => {
        const li = document.createElement('li');
        li.innerText = `Title: ${project.title}`;
        return li;
    });

    const projectList = document.getElementById('projectList');

    projectItems.forEach(projectItem => {
        projectList.appendChild(projectItem);
    });
}
