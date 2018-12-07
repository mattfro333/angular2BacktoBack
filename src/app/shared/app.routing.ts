import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ErrorComponent } from '../error/error.component';

@NgModule({
  imports: [
    RouterModule.forRooot([
      {path: 'home', component: HomeComponent},
      {path: '**', component: ErrorComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
