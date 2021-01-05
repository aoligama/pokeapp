import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PokeappService } from 'src/app/services/pokeapp.service';

@Component({
  selector: 'app-list-generations',
  templateUrl: './list-generations.component.html',
  styleUrls: ['./list-generations.component.scss']
})
export class ListGenerationsComponent implements OnInit {

  listGenerations: any;

  constructor(
    public title: Title,
    private pokeService: PokeappService,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Generations | Pokéapp');
    this.loadGenerations();
  }

  loadGenerations() {
    this.pokeService.getGenerations()
    .subscribe(res => {
      this.listGenerations = res.results
    })
  }

}
