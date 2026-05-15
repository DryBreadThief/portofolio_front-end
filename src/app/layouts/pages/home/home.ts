import { Component } from '@angular/core';
import { Projects } from "../../sections/projects-secs/projects";
import { Homelab } from "../../sections/homelab-secs/homelab";
import { Certs } from "../../sections/certs-secs/certs";
import { Exp } from '../../sections/exp-secs/exp';

@Component({
  selector: 'app-home',
  imports: [
    Projects,
    Homelab, 
    Certs,
    Exp
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
