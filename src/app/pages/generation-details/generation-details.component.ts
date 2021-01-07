import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PokeappService } from 'src/app/services/pokeapp.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generation-details',
  templateUrl: './generation-details.component.html',
  styleUrls: ['./generation-details.component.scss']
})
export class GenerationDetailsComponent implements OnInit {

  isLoading: boolean;
  generationDetail: any;
  listNames: any;
  listTypes: any;
  listVersions: any;
  listMoves: any;
  listMovesKeep: any;
  showAllMoves: boolean;
  quantPokemon: number;
  showSpecies: boolean;

  constructor(
    public title: Title,
    private pokeService: PokeappService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Generation Details | Pokéapp');

    this.route.params.subscribe(params => {
      const key = 'id';
      if (params[key]) {
        this.loadGenerationDetails((params[key]));
      }
    });

    this.listNames = [];
    this.listTypes = [];
    this.listVersions = [];
    this.listMoves = [];
    this.listMovesKeep = [];
    this.showAllMoves = false;
    this.quantPokemon = 0;
    this.showSpecies = false;
  }

  loadGenerationDetails(id): void {
    this.isLoading = true;
    this.pokeService.getGenerationDetails(id)
    .subscribe(res => {
      this.generationDetail = res;
      this.listNames = res.names;
      this.listTypes = res.types;
      this.listVersions = res.version_groups;
      this.listMovesKeep = res.moves;
      this.quantPokemon = res.pokemon_species.length;

      res.moves.length <= 10 ? this.listMoves = res.moves.length : this.buildListMoves(res.moves);

      this.isLoading = false;
    });
  }

  buildListMoves(moves: any): void{
    this.listMoves = [];
    for ( const move of moves ) {
      if (this.listMoves.length < 10){
        this.listMoves.push(move);
      }
    }
  }

  toggleMoves(): void{
    this.listMoves = this.listMovesKeep;
    if (this.showAllMoves) {
      this.showAllMoves = false;
      this.buildListMoves(this.listMoves);
    } else {
      this.showAllMoves = true;
    }
  }

  toggleSpecies(): void{
    if (this.showSpecies) {
      this.showSpecies = false;
    } else {
      this.showSpecies = true;
    }
  }
}
