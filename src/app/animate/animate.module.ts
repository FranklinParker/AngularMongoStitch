import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimateHomeComponent } from './components/animate-home/animate-home.component';
import {SharedModule} from '../shared/shared.module';
import { AnimateDemo1Component } from './components/animate-demo1/animate-demo1.component';

@NgModule({
  declarations: [
    AnimateHomeComponent,
    AnimateDemo1Component
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
