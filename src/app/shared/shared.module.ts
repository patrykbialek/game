import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from './modules/angular-material.module';

import * as fromComponents from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    AngularMaterialModule,
    ...fromComponents.components,
  ]
})
export class SharedModule { }
