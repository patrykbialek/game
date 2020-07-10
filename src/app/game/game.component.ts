import { Component, OnInit } from '@angular/core';

import * as fromModels from '../shared/models';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  status = 'active';

  playerRanking$: Observable<Partial<fromModels.Player>[]>;

  constructor() { }

  ngOnInit() {
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
