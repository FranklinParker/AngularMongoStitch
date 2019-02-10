import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {showStateTrigger, animateStateTrigger, listStateTrigger} from '../../animation/animationTriggers';

@Component({
  selector: 'app-animate-demo2',
  templateUrl: './animate-demo2.component.html',
  styleUrls: ['./animate-demo2.component.scss'],
  animations: [
    showStateTrigger,
    animateStateTrigger,
    listStateTrigger
  ]
})
export class AnimateDemo2Component implements OnInit {
  shown = false;
  width = 400;
  animate = false;
  testResults = [];

  onAddElement() {
    this.testResults.push(Math.random());
  }
  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.shown = !this.shown;
  }


  onAnimationStarted(event: AnimationEvent) {
    console.log(event);
  }

  onAnimationDone(event: AnimationEvent) {
    console.log(event);
  }

}
