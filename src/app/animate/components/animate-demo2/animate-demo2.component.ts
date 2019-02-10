import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animate-demo2',
  templateUrl: './animate-demo2.component.html',
  styleUrls: ['./animate-demo2.component.scss'],
  animations: [
    trigger('shownState', [
      state('shown', style({
        backgroundColor: 'gray',
      })),
      transition('void => shown', [
          style({opacity: 0}),
          animate(800)
        ]
      ),
      transition('shown => void',

        animate(800, style({opacity: 0}))
      ),
    ])
  ]
})
export class AnimateDemo2Component implements OnInit {
  shown = false;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.shown = !this.shown;
  }

}
