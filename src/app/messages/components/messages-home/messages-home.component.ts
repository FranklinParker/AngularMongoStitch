import {Component, OnInit} from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Message} from '../../models/message';
import {
  itemStateTrigger,
  markedTrigger,
  listStateTrigger
} from '../../services/animations';

@Component({
  selector: 'app-messages-home',
  templateUrl: './messages-home.component.html',
  styleUrls: ['./messages-home.component.scss'],
  animations: [
    itemStateTrigger,
    listStateTrigger,
    markedTrigger
  ]
})
export class MessagesHomeComponent implements OnInit {
  messages: Message[] = [];
  selectedMessage: Message;

  constructor(private messageService: MessageService) {
  }

  async ngOnInit() {
    this.messages = await this.messageService.getMessages();
  }

  onSelectMessage(message: Message) {
    this.selectedMessage = message;
  }

  onNewMessageSaved(message: Message) {
    this.messages.unshift(message);
  }

}
