import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  showAllProjects = false;

  projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal website built with Angular, Tailwind, and Flowbite.'
    },
    {
      title: 'Web App Project',
      description: 'A future full-stack project with frontend, backend, and database.'
    },
    {
      title: 'Deployment Project',
      description: 'Testing deployment, hosting, and reverse proxy setup.'
    },
    {
      title: 'API Project',
      description: 'A backend REST API project.'
    }
  ];

  get visibleProjects() {
    return this.showAllProjects ? this.projects : this.projects.slice(0, 3);
  }
}
