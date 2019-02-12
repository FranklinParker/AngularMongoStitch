import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message';
import {NgForm} from '@angular/forms';

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

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
  }

}
