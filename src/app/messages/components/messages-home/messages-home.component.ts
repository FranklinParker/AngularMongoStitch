import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Message} from '../../models/message';
import {itemStateTrigger} from '../../services/animations';

@Component ({
  selector: 'app-messages-home',
  templateUrl: './messages-home.component.html',
  styleUrls: ['./messages-home.component.scss'],
  animations: [
    itemStateTrigger
  ]
})
export class MessagesHomeComponent implements OnInit {
  messages: Message[] = [];
  constructor(private messageService: MessageService) { }

  async ngOnInit() {
    this.messages = await  this.messageService.getMessages();
  }

}
