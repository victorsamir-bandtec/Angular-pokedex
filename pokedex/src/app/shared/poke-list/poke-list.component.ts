import { PokeApiService } from './../../service/poke-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  public getAllPokemons: any;

  constructor(private PokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.PokeApiService.listAllPokemons.subscribe((res) => {
      this.getAllPokemons = res.results;

      this.getAllPokemons.map((pokemon: any) => {
        console.log(pokemon);
      });
    });
  }
}
