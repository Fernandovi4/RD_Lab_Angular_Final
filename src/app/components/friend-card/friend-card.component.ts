import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.css']
})
export class FriendCardComponent implements OnInit {

  constructor() { }

  @Input() name: string = "";

  ngOnInit(): void {
  }

}
