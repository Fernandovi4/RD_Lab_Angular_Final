import { Injectable } from '@angular/core';
import {from} from 'rxjs';

export interface Game {
  id: number;
  name: string;
  price: number;
  tag: string[];
  isInLibrary: boolean;
  description: string;
}

@Injectable({
  providedIn: 'root'
})

export class GamesService {

  constructor() {}

  public searchGameByName(searchedName: string, games: Game[]): Game[]{

    const searchedGames:Game[]  = []

    from(games)
      .subscribe(game => {
        if(game.name.toLowerCase().includes(searchedName.toLowerCase())){
          searchedGames.push(game)
        }
      })

    return searchedGames
  }
}
