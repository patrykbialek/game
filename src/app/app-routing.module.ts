import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { RoomComponent } from './room/room.component';
import { GameComponent } from './game/game.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    component: StartComponent,
  },
  {
    path: 'room',
    component: RoomComponent,
  },
  {
    path: 'game',
    component: GameComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
