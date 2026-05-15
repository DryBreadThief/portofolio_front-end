import { Component } from '@angular/core';

@Component({
  selector: 'app-certs',
  imports: [],
  templateUrl: './certs.html',
  styleUrl: './certs.scss',
})
export class Certs {
  showAllCerts = false;
  certImage = 'images/c.webp';
  

  certs = [
    {
      title: 'CompTIA A+',
      description: 'Currently studying hardware, networking, troubleshooting, operating systems, and security basics.'
    },
    {
      title: 'Angular',
      description: 'Learning Angular by building this portfolio website.'
    },
    {
      title: 'Networking',
      description: 'Learning routing, switching, firewalls, VLANs, and homelab networking.'
    },
    {
      title: 'Linux',
      description: 'Practicing Linux basics, servers, terminal usage, and system administration.'
    }
  ];

  get visibleCerts() {
    return this.showAllCerts ? this.certs : this.certs.slice(0, 3);
  }
}
