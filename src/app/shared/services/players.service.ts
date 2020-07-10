import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersHttpService {

  constructor(
    private http: HttpClient,
  ) { }

  joinGame(name: string) {
    const url = 'http://192.168.1.101:8080/players';
    const body = {
      name
    };
    return this.http
      .post(url, body);
  }
}