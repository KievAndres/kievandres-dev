import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BlogMainComponent } from './components/blog-main/blog-main.component';

const ROUTES_CONFIG: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'blog',
    component: BlogMainComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

export default ROUTES_CONFIG;
