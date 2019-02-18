import {Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService} from '../../services/message.service';
import {Message} from '../../models/message';
import {
  itemStateTrigger,
  markedTrigger,
  listStateTrigger
} from '../../services/animations';
import {Subscription} from 'rxjs';

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
export class MessagesHomeComponent implements OnInit, OnDestroy {
  messages: Message[] = [];
  selectedMessage: Message;
  subs: Subscription;

  constructor(private messageService: MessageService) {
  }

  async ngOnInit() {
    this.messages = await this.messageService.getMessages();
    this.subs = this.messageService.getMessageDeleteAsObservable()
      .subscribe((id: string) => {
          if (id) {
            const idx: number = this.messages.findIndex((message: Message) =>
              id === message.id
            );
            if (idx > -1) {
              this.messages.splice(idx, 1);
            }
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onSelectMessage(message: Message) {
    if (this.selectedMessage !== message) {
      this.selectedMessage = message;
      this.messageService.setMessageSelected(message);
    }

  }

  onNewMessageSaved(message: Message) {
    this.messages.unshift(message);
  }

}
