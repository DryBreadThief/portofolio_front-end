import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-certs',
  imports: [RouterLink],
  templateUrl: './certs.html',
  styleUrl: './certs.scss',
})

export class Certs {
  certImage = 'images/c.webp';

  certs = [
    {
      title: 'CompTIA A+',
      description: 'Hardware, networking, operating systems, and troubleshooting.'
    },
    {
      title: 'Angular',
      description: 'Frontend development, components, routing, and UI structure.'
    },
    {
      title: 'Networking',
      description: 'Routing, switching, VLANs, firewalls, and network basics.'
    },
    {
      title: 'Linux',
      description: 'Terminal usage, servers, filesystems, and administration.'
    }
  ];

  get visibleCerts() {
    return this.certs.slice(0, 3);
  }
}