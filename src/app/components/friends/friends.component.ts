import { Component, OnInit } from '@angular/core';
import {Friend} from "../../services/friends.service";
import {FriendsService} from '../../services/friends.service'
import {HttpService} from "../../services/http.service";


@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: Friend[] = [];
  friend: Friend|undefined
  clickedFriendId: string = ''
  searchedFriendName: string = ''

  constructor(
    private FriendsService: FriendsService,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    this.getFriendsList();
  }

  getFriendsList():void{
    this.httpService.getFriendsList()
      .subscribe(data => {
        // @ts-ignore
        this.friends = data['friends']
      })
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

  catchClickOnCard(userId: string):void{
    this.clickedFriendId = userId
  }

  removeUserFromFriends():void{
    this.httpService.removeUserFromFriendsById(this.clickedFriendId)
      .subscribe(() => {
        console.log('user was removed from friends')
        this.ngOnInit()
      })
  }

}
