import { Injectable } from '@angular/core';
import {Game} from "./games.service";


@Injectable({
  providedIn: 'root'
})
export class FiltrationService {

  checkedTags: string[] = []


  constructor() { }


  public filtrateGamesByPrice( price: number, games: Game[]){
    return games.filter(game => game.price <= price)
  }


  public filtrateGamesByTag(indieTag:boolean, actionTag: boolean,adventureTag: boolean, games: Game[]):Game[]{
    return this.collectCheckedTags(indieTag, actionTag,adventureTag ,games)
  }

  collectCheckedTags(indieTag:boolean, actionTag: boolean,adventureTag: boolean, games: Game[]): Game[]{

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

    return this.getFiltratedGames(games)
  }

  removeUncheckedTag(tag: string){
    const index = this.checkedTags.indexOf(tag);
    if (index !== -1) {
      this.checkedTags.splice(index, 1);
    }
  }

  getFiltratedGames(games: Game[]): Game[] {

    let filtratedByTagGames: Game[]=[]

    games.forEach(game => {
      for (let i = 0; i < game.tag.length; i++) {
        for (let j = 0; j < this.checkedTags.length; j++) {
          if ((game.tag[i] === this.checkedTags[j])) {
            filtratedByTagGames.push(game)
          }
        }
      }
    })

    return filtratedByTagGames
  }

}
