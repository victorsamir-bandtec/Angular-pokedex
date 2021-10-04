import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;

  public previousButton: boolean = false;
  public getAllPokemons: any;

  constructor(private PokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.PokeApiService.listAllPokemons.subscribe((res) => {
      this.setAllPokemons = res.results;
      this.getAllPokemons = this.setAllPokemons;
    });
  }

  public getSearch(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    });

    this.getAllPokemons = filter;
  }

  public nextPage() {
    this.PokeApiService.url = this.PokeApiService.nextUrl;
    this.previousButton = true;
    this.ngOnInit();
  }

  public previousPage() {
    const previous: string = this.PokeApiService.previousUrl;

    this.PokeApiService.url = previous;
    this.ngOnInit();

    if (
      previous === null ||
      previous === 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10'
    ) {
      this.previousButton = false;
      return;
    }
    this.previousButton = true;
  }
}
