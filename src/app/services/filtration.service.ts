import { Injectable } from '@angular/core';
import {Game} from "./games.service";


@Injectable({
  providedIn: 'root'
})
export class FiltrationService {

  checkedTags: string[] = []
  filtratedByTagGames: Game[]=[]

  constructor() { }

  public filtrateGamesByTag(indieTag:boolean, actionTag: boolean,adventureTag: boolean, games: Game[]):Game[]{
    this.collectCheckedTags(indieTag, actionTag,adventureTag ,games)
    return this.filtratedByTagGames
  }

  collectCheckedTags(indieTag:boolean, actionTag: boolean,adventureTag: boolean, games: Game[]): void{
    console.log(indieTag, actionTag, adventureTag)
    if(indieTag && !this.checkedTags.some(e => e === 'indie')){
      this.checkedTags.push('indie')
    } else if(!indieTag){
      this.removeUncheckedTag('indie')
    }

    if(actionTag && !this.checkedTags.some(e => e === 'action')){
      this.checkedTags.push('action')
    } else if( !actionTag){
      this.removeUncheckedTag('action')
    }

    if(adventureTag && !this.checkedTags.some(e => e === 'adventure')){
      this.checkedTags.push('adventure')
    } else if( !adventureTag){
      this.removeUncheckedTag('adventure')
    }
    console.log(this.checkedTags)
    this.getFiltratedGames(games)
  }

  removeUncheckedTag(tag: string){
    const index = this.checkedTags.indexOf(tag);
    if (index !== -1) {
      this.checkedTags.splice(index, 1);
    }
  }

  getFiltratedGames(games: Game[]): void {

    games.forEach(game => {
      for (let i = 0; i < game.tag.length; i++) {
        for (let j = 0; j < this.checkedTags.length; j++) {
          if ((game.tag[i] === this.checkedTags[j])) {
            this.filtratedByTagGames.push(game)
          }
        }
      }
    })

    console.log(this.filtratedByTagGames.length)
    this.deleteNotUniqueGame(this.filtratedByTagGames)
    console.log(this.filtratedByTagGames)
  }

  deleteNotUniqueGame(filtratedGames: Game[]){
    return [...new Map(filtratedGames.map(item => [item.id, item])).values()]
  }
}
