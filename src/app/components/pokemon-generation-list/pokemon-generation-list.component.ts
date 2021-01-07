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

  quantPokemons: number;
  page: number;
  generationId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.quantPokemons = this.pokemons.length;
    this.page = 1;

    this.route.params.subscribe(params => {
      const key = 'id';
      if (params[key]) {
        this.generationId = params[key];
      }
    });
  }

  choosePage(pageSelected: number): void {
    this.page = pageSelected;
  }

  goToDetailsPokemon(url: string): void {
    const pokemonId = parseInt(url.split('pokemon-species/')[1].replace('/', ''), 10);
    this.router.navigate([`/generations/details/pokemon-specie/${pokemonId}/${this.generationId}`]);
  }

}
