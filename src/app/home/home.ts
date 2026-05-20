import { Component, OnInit } from '@angular/core';
import { Projects } from "../layouts/sections/projects-secs/projects";
import { Homelab } from "../layouts/sections/homelab-secs/homelab";
import { Certs } from "../layouts/sections/certs-secs/certs";
import { Exp } from '../layouts/sections/exp-secs/exp';
import { PortfolioApi, Profile } from '../services/portfolio-api';

@Component({
  selector: 'app-home',
  imports: [
    Projects,
    Homelab, 
    Certs,
    Exp
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
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
        this.error = 'Unable to load profile right now.';
        this.loading = false;
      }
    });
  }
}
