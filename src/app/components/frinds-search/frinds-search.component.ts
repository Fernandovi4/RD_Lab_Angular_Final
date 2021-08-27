import { Component, OnInit } from '@angular/core';
import {Friend} from "../../services/friends.service";
import {FriendsService} from '../../services/friends.service'
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-frinds-search',
  templateUrl: './frinds-search.component.html',
  styleUrls: ['./frinds-search.component.css']
})
export class FriendsSearchComponent implements OnInit {

  users: Friend[] = [];
  user: Friend|undefined
  clickedFriendId: string = ''
  searchedUserName: string = ''

  constructor(
    private FriendsService: FriendsService,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getUsersList()
  }

  getUsersList():void{
    this.httpService.getUsersList()
      .subscribe(data => {
        // @ts-ignore
        this.users = data['users']
      })
  }

  searchUserByName() :void {
    this.users = []
    this.FriendsService.searchFriendByName()
      .subscribe(user => {
        if(user.nickName.toLowerCase().includes(this.searchedUserName.toLowerCase())){
          this.users.push(user)
        }
      })
  }

  catchClickOnCard(userId: string):void{
    this.clickedFriendId = userId
    // this.addUserToFriends()
  }

  addUserToFriends():void{
    this.httpService.addUserToFriendsById(this.clickedFriendId)
      .subscribe(() => {
        console.log('user was added to friends')
        this.ngOnInit()
      })
  }


  onChanged(){
    this.getUsersList()
    console.log('changed')
  }

}
