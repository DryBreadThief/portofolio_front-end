import { Component, OnInit } from '@angular/core';
import { Experience, PortfolioApi } from '../../../services/portfolio-api';

@Component({
  selector: 'app-exp',
  imports: [],
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
    this.portfolioApi.getAllExperience().subscribe({
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
}
