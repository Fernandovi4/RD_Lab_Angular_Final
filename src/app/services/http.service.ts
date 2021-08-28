import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // public registration<T>(url: string, body: any, params?: any): Observable<T>{
  //   console.log('from registration HttpService' + body)
  //   return this.http.post<T>(url, body )
  // }

  getGamesList(){

    return this.http.get('http://localhost:8080/api/games')
  }

  getFriendsList(){
    return this.http.get('http://localhost:8080/api/friends')
  }

  getUsersList(){
    return this.http.get('http://localhost:8080/api/friends/search')
  }

  getLibraryGamesList(){
    return this.http.get('http://localhost:8080/api/library')
  }

  removeUserFromFriendsById<T>(userId:string):Observable<T>{

    let url: string = `http://localhost:8080/api/friends/${userId}`
    let httpParams = new HttpParams()
      .set('id', userId)
    return this.http.patch<T>(url,{
      params: httpParams
    })
  }

  addUserToFriendsById<T>(userId:string):Observable<T>{

    let url: string = `http://localhost:8080/api/friends/search/${userId}`
    let httpParams = new HttpParams()
      .set('id', userId)
    return this.http.patch<T>(url,{
      params: httpParams
    })
  }

  public saveToLibrary<T>(gameId: string): Observable<T>{

    let url = 'http://localhost:8080/api/games/'
    let httpParams = new HttpParams()
      .set('id', gameId)
    return this.http.patch<T>( url+gameId,{
      params: httpParams
    });
  }
}
