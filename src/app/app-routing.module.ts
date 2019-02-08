import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'car/bmw', loadChildren: './car/bmw/bmw.module#BmwPageModule' },
  { path: 'car/mercedes', loadChildren: './car/mercedes/mercedes.module#MercedesPageModule' },
  { path: 'car/audi', loadChildren: './car/audi/audi.module#AudiPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
