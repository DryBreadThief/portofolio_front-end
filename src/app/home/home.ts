import { Component } from '@angular/core';
import { Projects } from "../layouts/sections/projects-secs/projects";
import { Homelab } from "../layouts/sections/homelab-secs/homelab";
import { Certs } from "../layouts/sections/certs-secs/certs";
import { Exp } from '../layouts/sections/exp-secs/exp';

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
