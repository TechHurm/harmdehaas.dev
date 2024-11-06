// Sample projects data
const projects = [
    {
        title: "Project 1",
        category: "Website",
        image: "https://via.placeholder.com/400x300",
        link: "#"
    },
    {
        title: "Project 2",
        category: "Application",
        image: "https://via.placeholder.com/400x300",
        link: "#"
    },
    // Add more projects as needed
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.category}</p>
        </div>
    `;
}

// Function to render projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects
            .map(project => createProjectCard(project))
            .join('');
    }
}

// Initialize when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
}); 