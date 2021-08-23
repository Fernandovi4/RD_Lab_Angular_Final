import { Component, OnInit } from '@angular/core';
import {Friend} from "../../services/friends.service";
import {FriendsService} from '../../services/friends.service'


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Friend[] = [];
  searchedFriendName: string = ''

  constructor( private FriendsService: FriendsService) { }

  ngOnInit() {
    this.getFriends();
  }

  getFriends(): void {
    this.FriendsService.getFriends()
      .subscribe(friends => {
        this.friends = friends
      });
    console.table(this.friends)
  }

  searchFriendByName() :void {
    this.friends = []
    this.FriendsService.searchFriendByName()
      .subscribe(friend => {
        if(friend.nickName.toLowerCase().includes(this.searchedFriendName.toLowerCase())){
          this.friends.push(friend)
        }
      })
  }

}
