import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

import {Message} from '../../models/message';
import {MessageService} from '../../services/message.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-messages-item',
  templateUrl: './messages-item.component.html',
  styleUrls: ['./messages-item.component.scss']
})
export class MessagesItemComponent implements OnInit, OnDestroy {
  @Input() message: Message;
  selectedMessageId: string;
  subs: Subscription;

  constructor(private messageService: MessageService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.subs = this.messageService.getSelectedMessageAsObservable()
      .subscribe((message: Message) => {
        this.selectedMessageId = message ? message.id : undefined;
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  onDelete() {
    this.dialog.open(ConfirmDialogComponent, {
      data: {message: 'Confirm Delete'},
      width: '40%',
      height: '30%',
      disableClose: true
    }).afterClosed().subscribe(data => {
      console.log('data', data);
    });
  }


}
