import {Component, DoCheck, OnInit} from '@angular/core';
import {Game} from '../../services/games.service'
import {GamesService} from "../../services/games.service";
import {HttpService} from "../../services/http.service";
import {FiltrationService} from "../../services/filtration.service";
// import {Observable} from "rxjs";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit, DoCheck {

  games: Game[] = [];
  gamesToRender: Game[] =[]
  searchedGameName: string = ''
  indieTag: boolean = false
  actionTag: boolean = false
  adventureTag: boolean = false

  // checkedTags: string[] = []

  constructor(
    private GamesService: GamesService,
    private httpService: HttpService,
    private FiltrationService: FiltrationService
  ) { }

  ngOnInit() {
    this.getGamesList()
  }

  ngDoCheck():void {
  }

  getGamesList():void {
    this.httpService.getGamesList()
      .subscribe(data => {
        // @ts-ignore
        this.games = data['games']
      })
  }

  searchGameByName() :void {
    this.games = this.GamesService.searchGameByName(this.searchedGameName, this.games)
  }

  filtrateGamesByTag():void {
    this.gamesToRender = this.FiltrationService.filtrateGamesByTag(
      this.indieTag,
      this.actionTag,
      this.adventureTag,
      this.games
  )
    console.log(this.games)
    this.ngDoCheck()
  }

  updateGamePage():void{
    this.ngOnInit()
  }

}
