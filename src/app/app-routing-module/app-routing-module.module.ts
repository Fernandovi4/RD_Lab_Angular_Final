import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'


import { LogInComponent } from '../components/login/log-in-component';
import { GamesComponent } from '../components/games/games.component';
import { LibraryComponent } from '../components/library/library.component';
import { FriendsComponent } from '../components/friends/friends.component';
import { ProfileComponent } from '../components/profile/profile.component';
import {FriendsSearchComponent} from "../components/frinds-search/frinds-search.component";

const routes: Routes = [
  { path: 'login', component: LogInComponent},
  { path: 'games', component: GamesComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'friends', component: FriendsComponent},
  { path: 'friends-search', component: FriendsSearchComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
