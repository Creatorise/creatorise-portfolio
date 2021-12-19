import data_connection from './dataConnection.js';

// Global Variables

// Elements

const project__sidebar = document.getElementById('project__sidebar');
const project__list = document.getElementById('project__list');
const project__sidebar__button = document.getElementById('project__sidebar__button');

// Events

window.addEventListener('load', () => {
    render_projects();
    make_sidebar_hidable();
});

// Event Handlers

async function render_projects() {
    const projects = await data_connection.fetchProjects();

    const project_items = projects.map((project, index) => {
        const project__list__item = document.createElement('li');
        project__list__item.innerText = `${project.title}`;
        project__list__item.classList.add('project__list__item');
        project__list__item.setAttribute('tabindex', index + 1);
        project__list__item.addEventListener('click', list_item_onclick);
        return project__list__item;
    });

    project_items.forEach(projectItem => {
        project__list.appendChild(projectItem);
    });
}

function list_item_onclick(event) {
    console.log(`listItem_onclick ~ event.target.innerText`, event.target.innerText);
}

function make_sidebar_hidable() {
    project__sidebar.addEventListener('click', toggle_sidebar_hidden);

    project__sidebar__button.addEventListener('click', toggle_sidebar_hidden);
}

function toggle_sidebar_hidden(event) {
    // console.log(`toggle_sidebar_hidden ~ event.target`, event.target);
    // console.log(`toggle_sidebar_hidden ~ project__sidebar`, project__sidebar);

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
