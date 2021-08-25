import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('assets/user.json')
  }

  getGamesList(){
    let data: [] = []
    const dataBaseList = this.http.get('http://localhost:8080/api/games')
    return dataBaseList
  }

  getLibraryGamesList(){
    return this.http.get('http://localhost:8080/api/library')
  }

  // registration(userEmail: string, userPassword: string){
  //   return this.http.post('http://localhost:8080/api/auth/register')
  // }

  public registration<T>(url: string, body: any, params?: any): Observable<T>{
    console.log('from registration HttpService' + body)
    return this.http.post<T>(url, body )
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
