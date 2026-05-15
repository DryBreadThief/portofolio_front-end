import { Component } from '@angular/core';

@Component({
  selector: 'app-certs',
  imports: [],
  templateUrl: './certs.html',
  styleUrl: './certs.scss',
})

export class Certs {
  certImage = 'images/cert-placeholder.webp';

  certs = [
    {
      title: 'CompTIA A+',
      description: 'Hardware, networking, troubleshooting, operating systems, and security basics.'
    },
    {
      title: 'Angular',
      description: 'Frontend development with Angular, components, routing, and UI structure.'
    },
    {
      title: 'Networking',
      description: 'Routing, switching, VLANs, firewalls, and basic network design.'
    },
    {
      title: 'Linux',
      description: 'Linux basics, terminal usage, servers, and system administration.'
    },
    {
      title: 'Security',
      description: 'Basic security concepts, access control, hardening, and monitoring.'
    }
  ];
}