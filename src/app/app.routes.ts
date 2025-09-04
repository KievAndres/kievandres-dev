import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'main',
    loadComponent: () => import('./portfolio/pages/main-page/main-page')
  },
  {
    path: '**',
    redirectTo: 'main'
  }
];
