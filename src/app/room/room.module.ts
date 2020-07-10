import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RoomComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class RoomModule { }
