import { Component, OnInit, Input } from '@angular/core';

export enum Lifebuoy {
  FiftyFifty = 'fifty-fifty',
  Scanner = 'scanner',
  Bot = 'bot',
}

@Component({
  selector: 'app-lifebuoys',
  templateUrl: './lifebuoys.component.html',
  styleUrls: ['./lifebuoys.component.scss']
})
export class LifebuoysComponent implements OnInit {

  @Input() status: string;

  constructor() { }

  ngOnInit(): void {
  }

  onTakeLifebuoys(lifebuoy: Lifebuoy) {
    console.log(lifebuoy)
  }
}
