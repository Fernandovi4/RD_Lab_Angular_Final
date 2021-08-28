import { Injectable } from '@angular/core';
import {from, Observable, ObservedValueOf, of} from 'rxjs';
import {FRIENDSLIST} from '../utils/friends-list'

export interface Friend {
  id: number;
  nickName: string;
  email: string;
  isFriend: boolean
}

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { }


  // public getFriends(): Observable<Friend[]> {
  //   return of(FRIENDSLIST)
  // }

  public searchFriendByName(): Observable<ObservedValueOf<Friend[]>>{
    // const friends = from(FRIENDSLIST)
    // friends.pipe(
    //   map(() => 'peter')
    // )
    return from(FRIENDSLIST)
  }

}


