import data_connection from './data_connection.js';

// Global Variables

// Elements

const project__sidebar = document.getElementById('project__sidebar');
const project__list = document.getElementById('project__list');
const project__sidebar__button = document.getElementById('project__sidebar__button');

// Onload

render_projects();

async function render_projects() {
    const projects = await data_connection.fetch_projects();

    const project_items = projects.map((project, index) => {
        const project__list__item = document.createElement('li');
        project__list__item.innerText = `${project.title}`;
        project__list__item.classList.add('a_project__list__item');
        project__list__item.setAttribute('tabindex', index + 1);
        project__list__item.addEventListener('click', project__list__item_clicked);
        return project__list__item;
    });

    project_items.forEach(projectItem => {
        project__list.appendChild(projectItem);
    });
}

// Event Listeners

// Make sidebar hidable
project__sidebar.addEventListener('click', toggle_sidebar_hidden);
project__sidebar__button.addEventListener('click', toggle_sidebar_hidden);

// Event Handlers

function project__list__item_clicked(event) {
    console.log(
        `project__list__item_clicked ~ event.target.innerText`,
        event.target.innerText
    );
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
