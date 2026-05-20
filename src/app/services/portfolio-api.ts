import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Profile {
  id: number;
  fullName: string;
  title: string;
  summary: string;
  githubUrl: string;
  linkedinUrl: string;
  email: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  top: boolean;
  displayOrder: number;
}

export interface Homelab {
  id: number;
  title: string;
  description: string;
  techStack: string;
  imageUrl: string;
  status: string;
  top: boolean;
  displayOrder: number;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  imageUrl: string;
  credentialUrl: string;
  top: boolean;
  displayOrder: number;
}

export interface Experience {
  id: number;
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string;
  top: boolean;
  displayOrder: number;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioApi {
  private readonly apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(`${this.apiUrl}/profile`);
  }

  getAllProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects`);
  }

  getTopProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiUrl}/projects/top`);
  }

  getAllHomelabs(): Observable<Homelab[]> {
    return this.http.get<Homelab[]>(`${this.apiUrl}/homelabs`);
  }

  getTopHomelabs(): Observable<Homelab[]> {
    return this.http.get<Homelab[]>(`${this.apiUrl}/homelabs/top`);
  }

  getAllCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(`${this.apiUrl}/certificates`);
  }

  getTopCertificates(): Observable<Certificate[]> {
    return this.http.get<Certificate[]>(`${this.apiUrl}/certificates/top`);
  }

  getAllExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}/experience`);
  }

  getTopExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiUrl}/experience/top`);
  }
}
