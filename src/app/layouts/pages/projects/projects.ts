import { Component, OnInit } from '@angular/core';
import { PortfolioApi, Project } from '../../../services/portfolio-api';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})

export class Projects implements OnInit {
  projects: Project[] = [];
  loading = true;
  error = '';

  constructor(private portfolioApi: PortfolioApi) {}

  ngOnInit(): void {
    this.loading = true;
    this.portfolioApi.getAllProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load projects right now.';
        this.loading = false;
      }
    });
  }
}
