import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PokeappService } from 'src/app/services/pokeapp.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

  isLoading: boolean;
  pokemonDetail: any;
  listNames: any;
  listEggs: any;

  constructor(
    public title: Title,
    private pokeService: PokeappService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Pokémon Details | Pokéapp');

    this.route.params.subscribe(params => {
      if (params['id']) {
        this.loadPokemonDetails((params['id']));
      }
    });
  }

  loadPokemonDetails(pokemonId) {
    this.isLoading = true;
    this.pokeService.getPokemonDetails(pokemonId)
    .subscribe(res => {
      console.log(res)
      this.pokemonDetail = res;
      this.listNames = res.names;
      this.listEggs = res.egg_groups;
      this.isLoading = false;
    })
  }

  back(){
    let entrys = [];
    this.route.url.subscribe(url => {
      for (let entry of url) {
        entrys.push(entry.path)
      }
    });

    if (entrys.includes('details')) {
      this.route.params.subscribe(params => {
        if (params['idGeneration']) {
          this.router.navigate([`/generations/details/${params['idGeneration']}`]);
        }
      });
    }
  }

}
