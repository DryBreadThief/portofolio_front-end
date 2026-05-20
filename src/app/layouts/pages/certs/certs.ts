import { Component, OnInit } from '@angular/core';
import { Certificate, PortfolioApi } from '../../../services/portfolio-api';

@Component({
  selector: 'app-certs',
  imports: [],
  templateUrl: './certs.html',
  styleUrl: './certs.scss',
})

export class Certs implements OnInit {
  certs: Certificate[] = [];
  loading = true;
  error = '';

  constructor(private portfolioApi: PortfolioApi) {}

  ngOnInit(): void {
    this.loading = true;
    this.portfolioApi.getAllCertificates().subscribe({
      next: (certs) => {
        this.certs = certs;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load certifications right now.';
        this.loading = false;
      }
    });
  }
}
