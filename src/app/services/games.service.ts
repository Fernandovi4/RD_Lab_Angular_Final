import { Injectable } from '@angular/core';
import {from, Observable, ObservedValueOf} from 'rxjs';
// import { delay, distinctUntilChanged, finalize, map, pluck, tap } from 'rxjs/operators';

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



  public getFiltratedGames(allGames: Game[]): Observable<ObservedValueOf<Game[]>>{
    const games = from(allGames)
    // games.pipe(
    //     map((el) => 'Hello'
    //   ));
    return games
  }

  public searchGameByName(searchedName: string, games: Game[]): Game[]{

    const searchedGames:Game[]  = []

    from(games)
      .subscribe(game => {
        if(game.name.includes(searchedName)){
          searchedGames.push(game)
        }
      })

    return searchedGames
  }





  // constructor() {
  //   super();
  //   this.setState({isLoading: true});
  //   this.fetchGames$()
  //     .subscribe(games => this.setState({
  //       entities: this.transformArray(games, 'id'),
  //       isLoading: false,
  //     }));
  // }
  //
  // public getGames$(): Observable<Game[]> {
  //   return this.getState$()
  //     .pipe(
  //       pluck('entities'),
  //       distinctUntilChanged(),
  //       map((entities) => Object.values(entities))
  //     )
  // }
  //
  // public isLoading$() {
  //   return this.getState$()
  //     .pipe(pluck('isLoading'))
  // }
  //
  // }
}
