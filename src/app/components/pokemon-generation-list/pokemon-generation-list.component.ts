import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.quantPokemons = this.pokemons.length;
  }

  choosePage(pageSelected) {
    this.page = pageSelected;
  }

}
