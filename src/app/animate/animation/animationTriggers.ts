import {animate, state, style, transition, trigger, group, keyframes} from '@angular/animations';

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


export const showStateTrigger = trigger('showState', [
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate(300)
  // ]),
  // transition('* => void', animate(300, style({
  //   opacity: 0
  // })))
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(400)
  ]),
  transition(':leave', animate(400, style({
    opacity: 0
  })))
]);

export const animateStateTrigger = trigger('animateState', [
  transition('* => *', [
    animate('4000ms cubic-bezier(0,.9,1,.15)', style({
      width: 0
    })),
    animate(400, style({
      width: '*'
    }))
  ])
]);

export const listStateTrigger = trigger('listState', [
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate(300)
  // ]),
  // transition('* => void', animate(300, style({
  //   opacity: 0
  // })))
  transition(':enter', [
    style({
      opacity: 0,
      backgroundColor: 'white'
    }),
    group([
      animate(1000, style({
        opacity: 0.7
      })),
      animate('5000ms ease-out', keyframes([
        style({
          backgroundColor: 'white',
          offset: 0
        }),
        style({
          backgroundColor: 'red',
          offset: 0.8
        }),
        style({
          backgroundColor: 'green',
          offset: 1
        })
      ]))
    ]),
    animate(300, style({
      backgroundColor: 'lightblue'
    }))
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  })))
]);

