import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  constructor() { }

  @Input() name: string = "";
  @Input() price: number = 0;
  @Input() description: string = '';

  ngOnInit(): void {

  }


  public saveToLibrary () {
    console.log('saveToLibrary')
  }

}
