import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,

  ]
})
export class StartModule { }
