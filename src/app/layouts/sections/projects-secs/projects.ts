import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})

export class Projects {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Angular, Tailwind, and Flowbite.'
    },
    {
      title: 'Full-Stack Web App',
      description: 'Frontend, backend, database, authentication, and deployment.'
    },
    {
      title: 'Deployment Project',
      description: 'Hosting, reverse proxy, HTTPS, and server deployment.'
    },
    {
      title: 'Database Project',
      description: 'PostgreSQL, schema design, and data structure.'
    }
  ];

  get visibleProjects() {
    return this.projects.slice(0, 3);
  }
}