import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-animate-home',
  templateUrl: './animate-home.component.html',
  styleUrls: ['./animate-home.component.scss'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px'
      })),
      state('clicked', style({
        backgroundColor: 'blue',
        width: '300px',
        height: '50px'
      })),
      state('mousedown', style({
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
      })),
      transition('default => clicked',
        animate('200ms 1000ms ease-in')),
      transition('clicked => default',
        animate('900ms 100ms ease-in')),
      transition('mousedown <=> clicked',
        animate(300))
    ])

  ]
})
export class AnimateHomeComponent implements OnInit {
  clickInfo = 'default';
  paragraphClicked = 'default';

  constructor() {
  }

  ngOnInit() {
  }

  onClickInfo() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }

}
