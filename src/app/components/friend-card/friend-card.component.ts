import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {

  constructor(
  ) { }

  @Input() name: string = "";
  @Input() friend: object| undefined;
  @Output() click = new EventEmitter<string>();
  @Output() getFriendId = new EventEmitter<string>()

  ngOnInit(): void {
  }

  sendFrendIdToParrent():void{
    // @ts-ignore
    this.getFriendId.emit(this.friend._id)
  }

}
