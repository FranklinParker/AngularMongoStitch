import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-animate-demo2',
  templateUrl: './animate-demo2.component.html',
  styleUrls: ['./animate-demo2.component.scss'],
  animations: [
    trigger('shownState', [
      transition(':enter', [
          style({opacity: 0}),
          animate(2000)
        ]
      ),
      transition(':leave',

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
