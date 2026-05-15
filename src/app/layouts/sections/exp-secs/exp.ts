import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-exp',
  imports: [RouterLink],
  templateUrl: './exp.html',
  styleUrl: './exp.scss',
})

export class Exp {
  experiences = [
    {
      title: 'IT / Helpdesk',
      period: 'Current / Recent',
      description: 'Supporting users, troubleshooting issues, and learning enterprise IT workflows.'
    },
    {
      title: 'SOC / Monitoring Exposure',
      period: 'Learning / Practice',
      description: 'Learning QRadar, events, flows, alerts, and infrastructure monitoring.'
    },
    {
      title: 'Homelab Practice',
      period: 'Personal Experience',
      description: 'Practicing servers, networking, virtualization, containers, and self-hosting.'
    },
    {
      title: 'Frontend Practice',
      period: 'Personal Projects',
      description: 'Building layouts and components with Angular, Tailwind, and Flowbite.'
    }
  ];

  get visibleExperiences() {
    return this.experiences.slice(0, 3);
  }
}