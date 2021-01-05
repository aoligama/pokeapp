import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { ListGenerationsComponent } from 'src/app/pages/list-generations/list-generations.component'

const routes: Routes = [
  {
    path: '', redirectTo: '/generations', pathMatch: 'full'
  },
  {
    path: 'generations', component: ListGenerationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
