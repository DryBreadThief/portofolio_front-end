import { Component, OnInit } from '@angular/core';
import { Homelab as HomelabItem, PortfolioApi } from '../../../services/portfolio-api';

@Component({
  selector: 'app-homelab',
  imports: [],
  templateUrl: './homelab.html',
  styleUrl: './homelab.scss',
})

export class Homelab implements OnInit {
  homelabItems: HomelabItem[] = [];
  loading = true;
  error = '';

  constructor(private portfolioApi: PortfolioApi) {}

  ngOnInit(): void {
    this.loading = true;
    this.portfolioApi.getAllHomelabs().subscribe({
      next: (homelabItems) => {
        this.homelabItems = homelabItems;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load homelab items right now.';
        this.loading = false;
      }
    });
  }
}
