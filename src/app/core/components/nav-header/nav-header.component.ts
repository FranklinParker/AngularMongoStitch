import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {
  loggedInUser: boolean;
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor() {
  }

  get displayName() {
    return '';
  }

  ngOnInit() {
    this.loggedInUser = false;
  }

  onToggle() {
    this.sidebarToggle.emit();
  }


}
