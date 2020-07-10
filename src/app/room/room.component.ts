import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import * as fromModels from '../shared/models';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  playerList$: Observable<Partial<fromModels.Player>[]>;
  playerRanking$: Observable<Partial<fromModels.Player>[]>;

  constructor() { }

  ngOnInit() {
    this.playerList$ = of([
      {
        nick: 'Józek',
        isAdmin: true,
      },
      {
        nick: 'Rybol',
        isAdmin: false,
      },
      {
        nick: 'Johny',
        isAdmin: false,
        loggedInPlayer: true,
      },
      {
        nick: 'Felek',
        isAdmin: false,
      },
      {
        nick: 'Micho',
        isAdmin: false,
      },
      {
        nick: 'Greg',
        isAdmin: false,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
      },
    ]);

    this.playerRanking$ = of([
      {
        nick: 'Józek',
        isAdmin: true,
        currentPrize: 0,
      },
      {
        nick: 'Rybol',
        isAdmin: false,
        currentPrize: 0,
      },
      {
        nick: 'Johny',
        isAdmin: false,
        currentPrize: 0,
        loggedInPlayer: true,
      },
      {
        nick: 'Felek',
        isAdmin: false,
        currentPrize: 5000,
      },
      {
        nick: 'Micho',
        isAdmin: false,
        currentPrize: 1000,
      },
      {
        nick: 'Greg',
        isAdmin: false,
        currentPrize: 0,
      },
      {
        nick: 'Heniek',
        isAdmin: false,
        currentPrize: 0,
      },
    ]);
  }

}
