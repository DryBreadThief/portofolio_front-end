import { Component, OnInit } from '@angular/core';
import { PortfolioApi, Profile } from '../../../services/portfolio-api';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})

export class Contact implements OnInit {
  profile?: Profile;
  loading = true;
  error = '';

  constructor(private portfolioApi: PortfolioApi) {}

  ngOnInit(): void {
    this.loading = true;
    this.portfolioApi.getProfile().subscribe({
      next: (profile) => {
        this.profile = profile;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load contact details right now.';
        this.loading = false;
      }
    });
  }
}
