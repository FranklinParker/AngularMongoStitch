import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { NavSideComponent } from './components/nav-side/nav-side.component';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  declarations: [
    NavHeaderComponent,
    NavSideComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    NavHeaderComponent,
    NavSideComponent
  ]
})
export class CoreModule { }
