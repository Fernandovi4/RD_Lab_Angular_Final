import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';

  public isLoggedIn: Boolean = false;

  public onChange(logged: boolean): void {
    if (logged) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
}
