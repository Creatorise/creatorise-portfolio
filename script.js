import dataConnection from './dataConnection.js';

window.onload = () => {
    renderProjects();
};

async function renderProjects() {
    const projects = await dataConnection.fetchProjects();

    const projectItems = projects.map((project, index) => {
        const li = document.createElement('li');
        li.innerText = `${project.title}`;
        li.classList.add('projectList__item');
        li.setAttribute('tabindex', index + 1);
        li.addEventListener('click', listItem_onclick);
        return li;
    });

    const projectList = document.getElementById('projectList');

    projectItems.forEach(projectItem => {
        projectList.appendChild(projectItem);
    });
}

function listItem_onclick(event) {
    console.log(`listItem_onclick ~ event.target.innerText`, event.target.innerText);
}
