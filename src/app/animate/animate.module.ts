import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateHomeComponent } from './components/animate-home/animate-home.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    AnimateHomeComponent
  ],
  exports: [
    AnimateHomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AnimateModule { }
