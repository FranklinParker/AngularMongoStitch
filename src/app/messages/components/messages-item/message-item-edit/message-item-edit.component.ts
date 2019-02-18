import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {Message} from '../../../models/message';
import {MessageService} from '../../../services/message.service';
import {buttonOverTrigger} from '../../../services/animations';
import {Error} from '../../../../core/models/error';
import {SaveResponse} from '../../../../core/models/saveResponse';

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
  saveButtonOver = false;
  error: Error;

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
    this.error = undefined;
    const resp: SaveResponse = await this.messageService.updateMessage(this.message);
    if (!resp.success) {
      this.error = resp.error;
    }
  }

  async onRefreshData() {
    this.error = undefined;
    const messageTemp = await this.messageService.reloadMessage(this.message.id);
    if (messageTemp) {
      this.message = messageTemp;
    }
  }
}
