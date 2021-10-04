import { PokeListComponent } from './../shared/poke-list/poke-list.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  public url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';
  public nextUrl: string = '';
  public previousUrl: string = '';

  constructor(private http: HttpClient) {}

  get listAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        this.nextUrl = res.next;
        this.previousUrl = res.previous;

        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
        });
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}
