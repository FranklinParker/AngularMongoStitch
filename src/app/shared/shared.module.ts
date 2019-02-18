import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {ErrorMessageComponent} from './components/error-message/error-message.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ConfirmDialogComponent,
    ErrorMessageComponent
  ],
  entryComponents: [
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
