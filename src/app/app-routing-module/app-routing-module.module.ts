import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'


import { LogInComponent } from '../components/login/log-in-component';
import { HomeComponent } from '../components/home/home.component';
import { GamesComponent } from '../components/games/games.component';
import { LibraryComponent } from '../components/library/library.component';
import { FriendsComponent } from '../components/friends/friends.component';
import { ProfileComponent } from '../components/profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent},
  { path: 'games', component: GamesComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'friends', component: FriendsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', component: HomeComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
