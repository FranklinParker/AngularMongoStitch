import { Component, OnInit } from '@angular/core';
import {clickedStateTrigger, numberChangedTrigger} from '../../animation/animationTriggers';

@Component({
  selector: 'app-animate-demo1',
  templateUrl: './animate-demo1.component.html',
  styleUrls: ['./animate-demo1.component.scss'],
  animations: [
    clickedStateTrigger,
    numberChangedTrigger
  ]
})
export class AnimateDemo1Component implements OnInit {
  clickInfo = 'default';
  paragraphClicked = 'default';
  numberEntered: string;
  constructor() { }

  ngOnInit() {
  }


  onClickInfo() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }

}
