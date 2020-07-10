import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, interval, Subscription } from 'rxjs';

import * as fromModels from '../shared/models';
import { PlayersHttpService } from '../shared/services/players.service';
import { tap, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnDestroy, OnInit {
  status = 'created';

  playerList;
  playerList$;

  playerRanking$: Observable<Partial<fromModels.Player>[]>;

  private subscription$ = new Subscription();

  constructor(
    private playersService: PlayersHttpService,
  ) { }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

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

    this.getPlayers();

    setInterval(() => {
      this.getPlayers();
    }, 2000)
  }

  getPlayers() {
    this.subscription$.add(
      this.playersService
        .getPlayers()
        .pipe(
          tap(console.log),
          tap(response => this.playerList = response)
        ).subscribe()
    );
  }

}
