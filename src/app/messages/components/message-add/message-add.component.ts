import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';
import {NgForm} from '@angular/forms';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-message-add',
  templateUrl: './message-add.component.html',
  styleUrls: ['./message-add.component.scss']
})
export class MessageAddComponent implements OnInit {
  message: Message = {
    id: undefined,
    message: undefined,
    creator: undefined
  };
  isSaving = false;
  @Output() newMessageSaved = new EventEmitter<Message>();

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    const savedMessage: Message = await this.messageService.saveMessage(this.message);
    console.log('savedMessage:', savedMessage);
    this.newMessageSaved.emit(savedMessage);
  }

}
