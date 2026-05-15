import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
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
      description: 'A web application with frontend, backend, database, authentication, and deployment.'
    },
    {
      title: 'Deployment Project',
      description: 'Testing hosting, reverse proxy, HTTPS, and server deployment.'
    },
    {
      title: 'Database Project',
      description: 'A project focused on PostgreSQL, schema design, and data structure.'
    }
  ];
}