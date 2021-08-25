import { Component, OnInit } from '@angular/core';
import {Game} from '../../services/games.service'
import {GamesService} from "../../services/games.service";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  libraryGames: Game[] = [];

  constructor(
    private GamesService: GamesService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getLibraryGamesList()
  }

  getLibraryGamesList():void {
    // @ts-ignore
    this.httpService.getLibraryGamesList()
      .subscribe(data => {

        console.log(data)
        // @ts-ignore
        this.libraryGames = data['myGames']
        // this.gamesQuantity = this.games.length
        // console.table(this.games)
      })
  }

}
