import { Component, OnInit } from '@angular/core';
import {Game} from '../../services/games.service'
import {GamesService} from "../../services/games.service";


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {

  games: Game[] = [];
  searchedGameName: string = ''
  indie: boolean = false
  action: boolean = false
  adventure: boolean = false

  checkedTags: string[] = []

  constructor( private GamesService: GamesService) { }

  ngOnInit() {
    this.getGames();
  }

  getGames(): void {
    this.GamesService.getGames()
      .subscribe(games => {
        this.games = games
      });
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
      this.removeUnckackedTag('indie')
    }

    if(this.action && !this.checkedTags.some(e => e === 'action')){
      this.checkedTags.push('action')
    } else if( !this.indie){
      this.removeUnckackedTag('action')
    }

    if(this.adventure && !this.checkedTags.some(e => e === 'adventure')){
      this.checkedTags.push('adventure')
    } else if( !this.indie){
      this.removeUnckackedTag('adventure')
    }
    console.table(this.checkedTags)
    this.getFiltratedGames()
  }

  removeUnckackedTag(tag: string){
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
//     isGameUnical(game: Game):void  {
//     let result
//     console.log(this.games)
//     this.games.forEach(el => {
//     if (el.id === game.id){
//       result = true;
//     }
//   })
//     return result
// }




}
