import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { PortfolioApi, Project } from '../../../services/portfolio-api';

@Component({
  selector: 'app-projects',
  imports: [RouterLink],
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
    this.portfolioApi.getTopProjects().subscribe({
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

  get visibleProjects() {
    return this.projects.slice(0, 3);
  }
}
