import {Component, OnInit} from '@angular/core';
import {Game} from '../../services/games.service'
import {GamesService} from "../../services/games.service";
import {HttpService} from "../../services/http.service";
import {FiltrationService} from "../../services/filtration.service";


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  games: Game[] = [];
  gamesToRender: Game[] =[]
  searchedGameName: string = ''
  indieTag: boolean = false
  actionTag: boolean = false
  adventureTag: boolean = false
  price: number = 0


  constructor(
    private GamesService: GamesService,
    private httpService: HttpService,
    private FiltrationService: FiltrationService
  ) { }

  ngOnInit() {
    this.getGamesList()
  }

  renderGames():void{
    this.gamesToRender = this.games
  }

  getGamesList():void {
    this.httpService.getGamesList()
      .subscribe(data => {
        // @ts-ignore
        this.games = data['games']
        this.renderGames()
      })
  }

  searchGameByName() :void {
    this.games = this.GamesService.searchGameByName(this.searchedGameName, this.games)
  }

  filtrateGamesByPrice():void{
    this.gamesToRender = this.FiltrationService.filtrateGamesByPrice(
      this.price, this.games)
  }

  filtrateGamesByTag():void {
    const filtratedByTagGames = this.FiltrationService.filtrateGamesByTag(
      this.indieTag, this.actionTag, this.adventureTag, this.games)

    this.gamesToRender = Array.from(new Set(filtratedByTagGames))

  }

  updateGamePage():void{
    this.ngOnInit()
  }

}
