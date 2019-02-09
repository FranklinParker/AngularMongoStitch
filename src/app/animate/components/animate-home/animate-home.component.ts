import { Component, OnInit } from '@angular/core';
import {trigger, state,style} from '@angular/animations';

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
      }))
    ])

  ]
})
export class AnimateHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
