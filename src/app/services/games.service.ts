import { Injectable } from '@angular/core';
import {from, Observable, ObservedValueOf, of} from 'rxjs';
import { delay, distinctUntilChanged, finalize, map, pluck, tap } from 'rxjs/operators';
// import { Store } from './store';
import {GAMELIST} from '../utils/games-list'

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

// export class GamesService extends Store<Game>{
export class GamesService {

  constructor() {}

  public getGames(): Observable<Game[]> {
    return of(GAMELIST)
  }

  public getFiltratedGames(): Observable<ObservedValueOf<Game[]>>{
    const games = from(GAMELIST)
    games.pipe(
        map((el) => 'Hello'
      ));
    return games
  }

  public searchGameByName(): Observable<ObservedValueOf<Game[]>>{
    const games = from(GAMELIST)
    games.pipe(
      map(() => 'peter')
    )
    return games
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
