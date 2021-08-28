import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-library-card',
  templateUrl: './library-card.component.html',
  styleUrls: ['./library-card.component.css']
})
export class LibraryCardComponent implements OnInit {

  @Input() name: string = "";
  @Input() description: string = '';
  @Input() game: object| undefined;

  constructor() { }

  ngOnInit(): void {
  }

  public downLoadGame(){
    alert('game is downloading')
  }

  public shareGame(){
    alert('Thank You for sharing the game')
  }

}
