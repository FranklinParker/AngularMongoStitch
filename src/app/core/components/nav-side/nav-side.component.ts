import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-side',
  templateUrl: './nav-side.component.html',
  styleUrls: ['./nav-side.component.scss']
})
export class NavSideComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter();
  loggedInUser: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  onSidenavClose() {
    this.closeSideNav.emit();
  }

}
