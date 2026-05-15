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
      description: 'Machines, operating systems, and hardware choices.'
    },
    {
      title: 'Networking',
      description: 'Routers, switches, VLANs, firewalls, and internal networks.'
    },
    {
      title: 'Self-hosting',
      description: 'Containers, reverse proxy, HTTPS, and deployment notes.'
    },
    {
      title: 'Virtualization',
      description: 'Proxmox, VMs, LXCs, and resource management.'
    }
  ];

  get visibleHomelabItems() {
    return this.homelabItems.slice(0, 3);
  }
}