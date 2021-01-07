import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeappService {

  constructor(
    private http: HttpClient
  ) { }

  apiURL: string = environment.apiURL;

  getGenerations(): any {
    return this.http.get(`${this.apiURL}/generation`).pipe(map((res: any) => res));
  }

  getGenerationDetails(generationId: number): any {
    return this.http.get(`${this.apiURL}/generation/${generationId}`).pipe(map((res: any) => res));
  }

  getPokemonDetails(pokemonId: number): any {
    return this.http.get(`${this.apiURL}/pokemon-species/${pokemonId}`).pipe(map((res: any) => res));
  }
}
