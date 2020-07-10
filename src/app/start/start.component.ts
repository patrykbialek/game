import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PlayersHttpService } from '../shared/services/players.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

const messages = {
  'Name is already taken!': 'Nick zajęty, wybierz inny.',
  'Game is already in ACTIVE state!': 'Nie możesz dołączyć, gra się rozpoczęła.',
};

export interface Error {
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: string;
  trace: string;
}

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  message: string;
  startForm: FormGroup;

  @ViewChild('nickHTML') nickHTML: ElementRef;

  constructor(
    private formBuilder: FormBuilder,
    private playersService: PlayersHttpService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.startForm = this.formBuilder.group({
      nick: ['', Validators.required]
    });

    setTimeout(() => {
      this.nickHTML.nativeElement.focus();
    }, 100);
  }

  onJoin() {
    if (this.startForm.valid) {
      const payload = this.startForm.get('nick').value;
      this.message = null;
      this.playersService
        .joinGame(payload)
        .pipe(
          tap(console.log),
        ).subscribe(
          () => { 
            this.router.navigate(['./room']);
          },
          (error) => {
            this.message = messages[error.error.message];
          }
        );
    }
  }

}
