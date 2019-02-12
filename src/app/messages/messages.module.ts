import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesHomeComponent } from './components/messages-home/messages-home.component';

@NgModule({
  declarations: [MessagesHomeComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }
