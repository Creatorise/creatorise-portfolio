import dataConnection from './dataConnection.js';

window.onload = () => {
    renderProjects();
    makeSidebarHidable();
};

async function renderProjects() {
    const projects = await dataConnection.fetchProjects();

    const projectItems = projects.map((project, index) => {
        const li = document.createElement('li');
        li.innerText = `${project.title}`;
        li.classList.add('project__list__item');
        li.setAttribute('tabindex', index + 1);
        li.addEventListener('click', listItem_onclick);
        return li;
    });

    const project__list = document.getElementById('project__list');

    projectItems.forEach(projectItem => {
        project__list.appendChild(projectItem);
    });
}

function listItem_onclick(event) {
    console.log(`listItem_onclick ~ event.target.innerText`, event.target.innerText);
}

function makeSidebarHidable() {
    const project__sidebar = document.querySelector('#project__sidebar');

    project__sidebar.addEventListener('click', toggleSidebarHidden);
}

function toggleSidebarHidden(event) {
    console.log(`toggleSidebarHidden ~ event.target`, event.target);
    event.target.classList.toggle('-hidden');
}
