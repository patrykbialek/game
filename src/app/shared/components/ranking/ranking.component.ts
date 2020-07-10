import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

import * as fromModels from '../../models';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  @Input() playerRanking$: Observable<Partial<fromModels.Player>[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
