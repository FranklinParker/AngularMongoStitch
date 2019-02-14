import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';
import {NgForm} from '@angular/forms';
import {MessageService} from '../../services/message.service';
import {MatSnackBar} from '@angular/material';
import {buttonOverTrigger} from '../../services/animations';

@Component({
  selector: 'app-message-add',
  templateUrl: './message-add.component.html',
  styleUrls: ['./message-add.component.scss'],
  animations: [
    buttonOverTrigger
  ]
})
export class MessageAddComponent implements OnInit {
  message: Message = {
    id: undefined,
    message: undefined,
    creator: undefined
  };
  isSaving = false;
  saveButtonOver = false;
  @Output() newMessageSaved = new EventEmitter<Message>();

  constructor(private messageService: MessageService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    this.isSaving = true;
    const savedMessage: Message = await this.messageService.createNewMessage(this.message);
    this.newMessageSaved.emit(savedMessage);
    this.isSaving = false;
    this.snackBar.open('New Message Saved', '', {
      duration: 8000
    });
    this.message = {
      message: undefined,
      creator: undefined
    };
  }

}
