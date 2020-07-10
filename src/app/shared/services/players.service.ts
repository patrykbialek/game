import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import * as fromModels from '../models';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersHttpService {

  constructor(
    private http: HttpClient,
  ) { }

  getPlayers() {
    const url = 'http://192.168.1.101:8080/players';
    return this.http
      .get(url)
      .pipe(
        distinctUntilChanged(((prev, curr) => prev === curr)),
      );
  }

  joinGame(name: string) {
    const url = 'http://192.168.1.101:8080/players';
    const body = {
      name
    };
    return this.http
      .post(url, body);
  }
}