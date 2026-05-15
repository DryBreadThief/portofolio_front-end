import { Routes } from '@angular/router';
import { Home } from './layouts/pages/home/home';
import { Exp } from './layouts/pages/exp/exp';
import { Projects } from './layouts/pages/projects/projects';
import { Homelab } from './layouts/pages/homelab/homelab';
import { Contact } from './layouts/pages/contact/contact';
import { Certs } from './layouts/pages/certs/certs';


export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'experience', component: Exp },
    { path: 'projects', component: Projects },
    { path: 'homelab', component: Homelab },
    { path: 'certs', component: Certs },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: 'home' }
    
];
