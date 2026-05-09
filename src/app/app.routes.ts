import { Routes } from '@angular/router';
import { Me } from './me/me';

export const routes: Routes = [

    { path: '', redirectTo: 'me', pathMatch: 'full' },
    { path: 'me', component: Me },
    { path: '**', redirectTo: '' }

];
