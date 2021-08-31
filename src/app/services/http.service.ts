import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";
import {Game} from "./games.service";
import {Friend} from "./friends.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // public registration<T>(url: string, body: any, params?: any): Observable<T>{
  //   console.log('from registration HttpService' + body)
  //   return this.http.post<T>(url, body )
  // }

  public logIn(email:string, password: string){
    const url = 'http://localhost:8080/api/auth/login'
    return this.http.post(url, {
      email: email,
      password: password
    })
  }

  getGamesList(){

    return this.http.get<Game>('api/games')
  }

  getFriendsList(){
    return this.http.get<Friend>('http://localhost:8080/api/friends')
  }

  getUsersList(){
    return this.http.get<Friend>('http://localhost:8080/api/friends/search')
  }

  getLibraryGamesList(){
    return this.http.get<Game>('http://localhost:8080/api/library')
  }

  removeUserFromFriendsById<Friend>(userId:string):Observable<Friend>{

    let url: string = `http://localhost:8080/api/friends/${userId}`
    return this.http.patch<Friend>(url,{})
  }

  addUserToFriendsById<Friend>(userId:string):Observable<Friend>{

    let url: string = `http://localhost:8080/api/friends/search/${userId}`
    let httpParams = new HttpParams()
      .set('id', userId)
    return this.http.patch<Friend>(url,{
      params: httpParams
    })
  }

  public saveToLibrary<Game>(gameId: string): Observable<Game>{

    let url = 'http://localhost:8080/api/games/'
    let httpParams = new HttpParams()
      .set('id', gameId)
    return this.http.patch<Game>( url+gameId,{
      params: httpParams
    });
  }
}
