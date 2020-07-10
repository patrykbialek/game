import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromModels from '../../models';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  
  @Input() playerList: Partial<fromModels.Player>[];

  constructor() { }

  ngOnInit(): void {
  }

}
