import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module/app-routing-module.module';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/login/log-in-component';
import { HeaderComponent } from './components/header/header-component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { GamesComponent } from './components/games/games.component';
import { LibraryComponent } from './components/library/library.component';
import { FriendsComponent } from './components/friends/friends.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { LibraryCardComponent } from './components/library-card/library-card.component';
import { FriendCardComponent } from './components/friend-card/friend-card.component';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HeaderComponent,
    HomeComponent,
    GamesComponent,
    LibraryComponent,
    FriendsComponent,
    ProfileComponent,
    ProfileFormComponent,
    GameCardComponent,
    LibraryCardComponent,
    FriendCardComponent,
    LibraryCardComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
        // RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
