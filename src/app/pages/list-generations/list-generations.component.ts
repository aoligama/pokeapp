import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PokeappService } from 'src/app/services/pokeapp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-generations',
  templateUrl: './list-generations.component.html',
  styleUrls: ['./list-generations.component.scss']
})
export class ListGenerationsComponent implements OnInit {

  listGenerations: any;
  isLoading: boolean;

  constructor(
    public title: Title,
    private pokeService: PokeappService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Generations | Pokéapp');
    this.loadGenerations();
  }

  loadGenerations(): void {
    this.isLoading = true;
    this.pokeService.getGenerations()
    .subscribe(res => {
      this.listGenerations = res.results;
      this.isLoading = false;
    });
  }

  goToDetails(url: string): void {
    const generationId = parseInt(url.split('generation/')[1].replace('/', ''), 10);
    this.router.navigate([`/generations/details/${generationId}`]);
  }
}
