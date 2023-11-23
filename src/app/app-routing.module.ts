import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import ROUTES_CONFIG from './routes';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES_CONFIG)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
