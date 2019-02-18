import {
  Component,
  OnInit,
  Input,
  OnChanges,
  EventEmitter,
  Output
} from '@angular/core';

import { Error } from '../../../core/models/error';
import { HttpStatusCodes } from '../../../core/models/httpstatuses';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit, OnChanges {
  @Input() error: Error;
  @Output() refreshData = new EventEmitter<void>();
  messages: string[];
  versionMismatchError = false;

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes) {
    console.log(changes);
    if (
      this.error.error.code === HttpStatusCodes.HTTP_STATUS_STALE_DATA_412
    ) {
      this.versionMismatchError = true;
    }
    if (this.error && this.error.error.message) {
      this.messages.push(this.error.error.message);
    }
  }

  onReloadData() {
    this.refreshData.emit();
  }
}
