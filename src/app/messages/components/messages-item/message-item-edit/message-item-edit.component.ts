import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {Message} from '../../../models/message';
import {MessageService} from '../../../services/message.service';
import {buttonOverTrigger} from '../../../services/animations';

@Component({
  selector: 'app-message-item-edit',
  templateUrl: './message-item-edit.component.html',
  styleUrls: ['./message-item-edit.component.scss'],
  animations: [
    buttonOverTrigger
  ]
})
export class MessageItemEditComponent implements OnInit, OnDestroy {
  message: Message;
  subs: Subscription;

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
    this.subs = this.messageService.getSelectedMessageAsObservable()
      .subscribe((message: Message) => {
        this.message = Object.assign({}, message);
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  async onSubmit(form: NgForm) {
    this.messageService.updateMessage(this.message);
  }

}
