import { Component, OnInit } from '@angular/core';
import {Game} from '../../services/games.service'
import {GamesService} from "../../services/games.service";
// import { HttpClient} from '@angular/common/http';
import {User} from "../../user";
import {HttpService} from "../../services/http.service";


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  games: Game[] = [];
  gamesQuantity: number = 0
  user: User | undefined;
  searchedGameName: string = ''
  indie: boolean = false
  action: boolean = false
  adventure: boolean = false

  checkedTags: string[] = []

  constructor(
    private GamesService: GamesService,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.getGamesList()
  }

  getGamesList():void {
    this.httpService.getGamesList()
      .subscribe(data => {
        // @ts-ignore
        this.games = data['games']
        this.gamesQuantity = this.games.length
      })
  }

  searchGameByName() :void {
    this.games = []
    this.GamesService.searchGameByName()
      .subscribe(game => {
        if(game.name.includes(this.searchedGameName)){
          this.games.push(game)
        }
      })
  }

  collectCheckedTags(): void{

    if(this.indie && !this.checkedTags.some(e => e === 'indie')){
      this.checkedTags.push('indie')
    } else if(!this.indie){
      this.removeUnckeckedTag('indie')
    }

    if(this.action && !this.checkedTags.some(e => e === 'action')){
      this.checkedTags.push('action')
    } else if( !this.indie){
      this.removeUnckeckedTag('action')
    }

    if(this.adventure && !this.checkedTags.some(e => e === 'adventure')){
      this.checkedTags.push('adventure')
    } else if( !this.indie){
      this.removeUnckeckedTag('adventure')
    }
    console.table(this.checkedTags)
    this.getFiltratedGames()
  }

  removeUnckeckedTag(tag: string){
    const index = this.checkedTags.indexOf(tag);
    if (index !== -1) {
      console.log(this.checkedTags)
      this.checkedTags.splice(index, 1);
      console.log(this.checkedTags)
    }
  }

  getFiltratedGames(): void {
    // debugger
    const filtraterGames:Game[] = []
    this.games = []
    this.GamesService.getFiltratedGames()
      .subscribe(game => {

        for (let i = 0; i < game.tag.length; i++){
          for( let j = 0; j < this.checkedTags.length; j++){
            // debugger
            if((game.tag[i] === this.checkedTags[j])) {
              filtraterGames.push(game)
            }
          }
        }

      });
    console.log(filtraterGames.length)
    this.deleteNotUnicGame(filtraterGames)
    this.games = filtraterGames
  }

  deleteNotUnicGame(filtraterGames: Game[]){
    return [...new Map(filtraterGames.map(item => [item.id, item])).values()]
  }

}
