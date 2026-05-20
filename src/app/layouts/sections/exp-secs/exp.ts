import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Experience, PortfolioApi } from '../../../services/portfolio-api';

@Component({
  selector: 'app-exp',
  imports: [RouterLink],
  templateUrl: './exp.html',
  styleUrl: './exp.scss',
})

export class Exp implements OnInit {
  experiences: Experience[] = [];
  loading = true;
  error = '';

  constructor(private portfolioApi: PortfolioApi) {}

  ngOnInit(): void {
    this.loading = true;
    this.portfolioApi.getTopExperience().subscribe({
      next: (experiences) => {
        this.experiences = experiences;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load experience right now.';
        this.loading = false;
      }
    });
  }

  get visibleExperiences() {
    return this.experiences.slice(0, 3);
  }
}
