import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PokeappService } from 'src/app/services/pokeapp.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generation-details',
  templateUrl: './generation-details.component.html',
  styleUrls: ['./generation-details.component.scss']
})
export class GenerationDetailsComponent implements OnInit {

  isLoading: boolean;
  generationDetail: any;
  listNames: any = [];
  listTypes: any = [];
  listVersions: any = [];
  listMoves: any = [];
  listMovesKeep: any = [];
  showAllMoves: boolean = false;
  quantPokemon: number = 0;
  showSpecies: boolean = false;

  constructor(
    public title: Title,
    private pokeService: PokeappService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Generation Details | Pokéapp');

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loadGenerationDetails((params['id']));
      }
    });
  }

  loadGenerationDetails(id) {
    this.isLoading = true;
    this.pokeService.getGenerationDetails(id)
    .subscribe(res => {
      console.log(res)
      this.generationDetail = res;
      this.listNames = res.names;
      this.listTypes = res.types;
      this.listVersions = res.version_groups;
      this.listMovesKeep = res.moves;
      this.quantPokemon = res.pokemon_species.length;

      res.moves.length <= 10 ? this.listMoves = res.moves.length : this.buildListMoves(res.moves)

      this.isLoading = false;
    })
  }

  buildListMoves(moves: any){
    this.listMoves = [];
    for(let move of moves){
      if(this.listMoves.length < 10){
        this.listMoves.push(move);
      }
    }
  }

  toggleMoves(){
    this.listMoves = this.listMovesKeep;
    if(this.showAllMoves) {
      this.showAllMoves = false;
      this.buildListMoves(this.listMoves)
    } else {
      this.showAllMoves = true;
    }
  }

  toggleSpecies(){
    if(this.showSpecies) {
      this.showSpecies = false;
    } else {
      this.showSpecies = true;
    }
  }
}
