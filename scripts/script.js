import dataConnection from './dataConnection.js';

const project__sidebar = document.querySelector('#project__sidebar');

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
    project__sidebar.addEventListener('click', toggleSidebarHidden);

    const project__sidebar__button = document.querySelector('#project__sidebar__button');

    project__sidebar__button.addEventListener('click', toggleSidebarHidden);
}

function toggleSidebarHidden(event) {
    // console.log(`toggleSidebarHidden ~ event.target`, event.target);
    // console.log(`toggleSidebarHidden ~ project__sidebar`, project__sidebar);

    if (event.target != project__sidebar) {
        project__sidebar.classList.remove('-hidden');
        return;
    }

    project__sidebar.classList.add('-hidden');
}

// function setSidebarHidden(event) {
//     console.log(`setSidebarHidden ~ event.target`, event.target);
//     console.log(`setSidebarHidden ~ project__sidebar`, project__sidebar);
//     project__sidebar.classList.add('-hidden');
// }

// function removeSidebarHidden(event) {
//     console.log(`removeSidebarHidden ~ event.target`, event.target);
//     console.log(`removeSidebarHidden ~ project__sidebar`, project__sidebar);
//     project__sidebar.classList.remove('-hidden');
// }
