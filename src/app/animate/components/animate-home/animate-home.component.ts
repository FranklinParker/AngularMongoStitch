import {Component, OnInit} from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {clickedStateTrigger, numberChangedTrigger} from '../../animation/animationTriggers';

@Component({
  selector: 'app-animate-home',
  templateUrl: './animate-home.component.html',
  styleUrls: ['./animate-home.component.scss'],
  animations: [
    clickedStateTrigger,
    numberChangedTrigger
  ]
})
export class AnimateHomeComponent implements OnInit {
  clickInfo = 'default';
  paragraphClicked = 'default';
  numberEntered: string;

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
