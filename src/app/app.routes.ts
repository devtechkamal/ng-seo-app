import { Routes } from '@angular/router';
import { HomePage } from './features/home/home';
import { About } from './features/about/about';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'about', component: About },
];
