import { Injectable } from '@angular/core';
import {from} from 'rxjs';

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

  public searchFriendByName(searchedName: string, friends: Friend[]): Friend[] {
    const searchedFriends: Friend[] = []

    from(friends)
      .subscribe(friend => {
        if (friend.nickName.toLowerCase().includes(searchedName.toLowerCase())) {
          searchedFriends.push(friend)
        }
      })
    return searchedFriends
  }
}


