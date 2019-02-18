import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { NavSideComponent } from './components/nav-side/nav-side.component';
import {AppRoutingModule} from '../app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    NavHeaderComponent,
    NavSideComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    NavHeaderComponent,
    NavSideComponent,
    HomeComponent
  ]
})
export class CoreModule { }
