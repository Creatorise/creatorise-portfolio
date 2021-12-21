import data_connection from './data_connection.js';

// Global Variables

let state = { projects: [] };

// Elements

const project__sidebar = document.getElementById('project__sidebar');
const project__sidebar__button = document.getElementById('project__sidebar__button');
const project__list = document.getElementById('project__list');
const project__view = document.getElementById('project__view');

// Onload

render_projects();

async function render_projects() {
    state.projects = await data_connection.fetch_projects();

    const project_items = state.projects.map((project, index) => {
        const project__list__item = document.createElement('li');
        project__list__item.innerText = `${project.title}`;
        project__list__item.classList.add('a_project__list__item');
        project__list__item.setAttribute('tabindex', index + 1);
        project__list__item.addEventListener('click', _ => render_project(project.id));
        return project__list__item;
    });

    project_items.forEach(projectItem => {
        project__list.appendChild(projectItem);
    });
}

// Event Listeners

window.addEventListener('click', toggle_project_sidebar);

// Event Handlers

function toggle_project_sidebar(event) {
    // console.log(`toggle_project_sidebar ~ event.target`, event.target);

    if (event.target === project__sidebar__button) {
        project__sidebar.classList.toggle('-hidden');
        return;
    }

    project__sidebar.classList.add('-hidden');
}

function render_project(project_id) {
    console.log(`render_project ~ project_id`, project_id);
    console.log(`project__list__item_clicked ~ state.projects`, state.projects);

    const project = state.projects.find(project => project.id == project_id);
    console.log(`render_project ~ project`, project);

    project__view.innerText = project.title;
}
