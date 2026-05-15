import { Component } from '@angular/core';

@Component({
  selector: 'app-homelab',
  imports: [],
  templateUrl: './homelab.html',
  styleUrl: './homelab.scss',
})

export class Homelab {
  homelabItems = [
    {
      title: 'Servers',
      description: 'Machines, operating systems, and hardware choices for my homelab.'
    },
    {
      title: 'Networking',
      description: 'Routers, switches, VLANs, firewalls, and internal network design.'
    },
    {
      title: 'Virtualization',
      description: 'Experiments with Proxmox, virtual machines, containers, and resource management.'
    },
    {
      title: 'Self-hosting',
      description: 'Hosting services with containers, reverse proxy, HTTPS, and DNS.'
    },
    {
      title: 'Security',
      description: 'Basic hardening, firewall rules, access control, and safe remote access.'
    }
  ];
}