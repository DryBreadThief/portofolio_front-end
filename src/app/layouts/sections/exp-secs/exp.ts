import { Component } from '@angular/core';

@Component({
  selector: 'app-exp',
  imports: [],
  templateUrl: './exp.html',
  styleUrl: './exp.scss',
})
export class Exp {
  showAllExperiences = false;

  experiences = [
    {
      title: 'IT / Helpdesk',
      period: 'Current / Recent',
      description: 'Supporting users, troubleshooting technical issues, and learning enterprise IT workflows.'
    },
    {
      title: 'SOC / Monitoring Exposure',
      period: 'Learning / Practice',
      description: 'Learning about QRadar, events, flows, alerts, monitoring, and infrastructure health.'
    },
    {
      title: 'Homelab Practice',
      period: 'Personal Experience',
      description: 'Practicing servers, networking, virtualization, containers, and self-hosted services.'
    }
  ];

  get visibleExperiences() {
    return this.showAllExperiences ? this.experiences : this.experiences.slice(0, 3);
  }
}
