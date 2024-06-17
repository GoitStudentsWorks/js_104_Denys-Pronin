document.addEventListener('DOMContentLoaded', function () {
  const projects = [
    {
      image: '../img/my-projects/Rectangle-10.jpg',
      tech: 'React, JavaScript, Node JS, Git',
      name: 'power pulse webservice ',
    },
    {
      image: '../img/my-projects/Rectangle-7.jpg',
      tech: 'Angular, TypeScript, Node JS, Git',
      name: 'mimino website',
    },
    {
      image: '../img/my-projects/Rectangle-8.jpg',
      tech: 'Vue, JavaScript, Node JS, Git',
      name: 'vyshyvanka vibes Landing Page',
    },
    {
      image: '../img/my-projects/Rectangle-6.jpg',
      tech: 'React Native, JavaScript, Git',
      name: 'chego jewelry website',
    },
    {
      image: '../img/my-projects/Rectangle-4.jpg',
      tech: 'Svelte, JavaScript, Node JS, Git',
      name: 'energy flow webservice',
    },
    {
      image: '../img/my-projects/Rectangle-5.jpg',
      tech: 'React, JavaScript, Express, MongoDB',
      name: 'fruitbox online store',
    },
    {
      image: '../img/my-projects/first-screen-1.jpg',
      tech: 'React, JavaScript, Express, MongoDB',
      name: 'starlight studio landing page',
    },
  ];

  const projectsContainer = document.getElementById('project-container');
  const loadMoreButton = document.getElementById('load-more-button');
  let projectsLoaded = 0;
  const projectsToLoad = 3;

  function loadProjects() {
    const nextProjects = projects.slice(
      projectsLoaded,
      projectsLoaded + projectsToLoad
    );
    nextProjects.forEach(project => {
      const projectItem = document.createElement('li');

      projectItem.innerHTML = `

            <div class="image-wrapper">
                <img src="${project.image}" alt="${project.name}">
            </div>
            <div class="text-container">
                <p class="stack-teh">${project.tech}</p>
                <div class="text-button">
                <h3 class="name-project">${project.name}</h3>
                <div class="link-container">
                    <a  target="_blank" class="link-project" href="https://github.com/Denys-Pronin/IT-Hub-Portfolio">VISIT
                        <svg stroke="#00B068" width="24" height="24"><use href="./img/symbol-defs.svg#icon-vector"></use></svg>
                    </a>
                </div>
                </div>
            </div>


`;
      projectsContainer.appendChild(projectItem);
    });
    projectsLoaded += projectsToLoad;
    if (projectsLoaded >= projects.length) {
      loadMoreButton.style.display = 'none';
    }
  }

  loadMoreButton.addEventListener('click', loadProjects);

  // Завантажити початкові проекти
  loadProjects();
});
