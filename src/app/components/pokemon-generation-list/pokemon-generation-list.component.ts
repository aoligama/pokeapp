import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-generation-list',
  templateUrl: './pokemon-generation-list.component.html',
  styleUrls: ['./pokemon-generation-list.component.scss']
})
export class PokemonGenerationListComponent implements OnInit {

  @Input()
    pokemons: any;

  quantPokemons: number = 0;
  page: number = 1;
  generationId: number = 0;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.quantPokemons = this.pokemons.length;

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.generationId = params['id'];
      }
    });
  }

  choosePage(pageSelected) {
    this.page = pageSelected;
  }

  goToDetailsPokemon(url: string) {
    let pokemonId = parseInt(url.split('pokemon-species/')[1].replace('/', ''));
    this.router.navigate([`/generations/details/pokemon-specie/${pokemonId}/${this.generationId}`]);
  }

}
