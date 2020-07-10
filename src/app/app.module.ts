import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl, 'pl');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartModule } from './start/start.module';
import { RoomModule } from './room/room.module';
import { GameModule } from './game/game.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    StartModule,
    RoomModule,
    GameModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
