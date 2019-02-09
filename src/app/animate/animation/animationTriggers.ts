import {animate, state, style, transition, trigger} from '@angular/animations';

export const clickedStateTrigger =
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
        animate('900ms 100ms ease-out')),
      transition('mousedown <=> clicked',
        animate(300))
    ]);

export const numberChangedTrigger =
  trigger('numberSelectedState', [
    state('unselected', style({
      border: '1px solid black',
      padding: '5px',
      margin: '3px',
      color: 'black',
    })),
    state('selected', style({
      border: '2px solid red',
      margin: '3px',
      padding: '5px',
      backgroundColor: 'black',
      color: 'white'
    })),
    transition('unselected => selected', [
        style({
          border: '2px solid black',
          padding: '5px',
          margin: '3px',
        }),
        animate(500,
          style({
            backgroundColor: 'red',
            transform: 'scale(1.05)'
          })),
        animate(1000)
      ]
    ),
    transition('selected => unselected', [
        style({
          border: '1px solid blue',
          padding: '5px',
          margin: '3px',
        }),
        animate(1000)
      ]
    )
  ]);
