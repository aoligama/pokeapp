import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// pages
import { ListGenerationsComponent } from 'src/app/pages/list-generations/list-generations.component';
import { GenerationDetailsComponent } from 'src/app/pages/generation-details/generation-details.component';
import { PokemonDetailsComponent } from 'src/app/pages/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/generations', pathMatch: 'full'
  },
  {
    path: 'generations', component: ListGenerationsComponent
  },
  {
    path: 'generations/details/:id', component: GenerationDetailsComponent
  },
  {
    path: 'generations/details/pokemon-specie/:id/:idGeneration', component: PokemonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
