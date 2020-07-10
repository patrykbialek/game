import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartModule } from './start/start.module';
import { RoomModule } from './room/room.module';
import { GameModule } from './game/game.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    StartModule,
    RoomModule,
    GameModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
