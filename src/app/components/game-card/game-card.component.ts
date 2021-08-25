import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  constructor(
    private httpService: HttpService
  ) { }

  @Input() name: string = "";
  @Input() price: number = 0;
  @Input() description: string = '';
  @Input() game: object| undefined;


  ngOnInit(): void {

  }

  public saveToLibrary () {

    // @ts-ignore
    this.httpService.saveToLibrary(this.game._id)
      // .subscribe(data => {
      //
      // })
  }

}
