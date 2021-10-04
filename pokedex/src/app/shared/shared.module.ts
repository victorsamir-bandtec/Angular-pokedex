import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { PokePaginationComponent } from './poke-pagination/poke-pagination.component';

@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokePaginationComponent,
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    PokePaginationComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
