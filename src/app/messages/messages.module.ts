import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesHomeComponent } from './components/messages-home/messages-home.component';
import { MessagesItemComponent } from './components/messages-item/messages-item.component';
import {SharedModule} from '../shared/shared.module';
import { MessageAddComponent } from './components/message-add/message-add.component';

@NgModule({
  declarations: [MessagesHomeComponent, MessagesItemComponent, MessageAddComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule
  ]
})
export class MessagesModule { }
