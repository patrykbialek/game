import { Component, OnInit } from '@angular/core';

import * as fromModels from '../shared/models';
import { Observable, of } from 'rxjs';
import { GameService } from '../shared/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  status = 'active';

  playerRanking$: Observable<Partial<fromModels.Player>[]>;

  questions = [
    {
      name: 'A. sfsfsdfsf'
    },
    {
      name: 'B. sfsfsdfsf'
    },
    {
      name: 'C. sfsfsdfsf'
    },
    {
      name: 'D. sfsfsdfsf'
    },
  ];

  constructor(
    private gameService: GameService,
  ) {
    gameService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
   }

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
