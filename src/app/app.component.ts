import {Component, OnInit} from '@angular/core';
import {StitchService} from './core/services/stitch.service';
import {routeStateTrigger} from './routingAnimations';
import {RouterOutlet} from '@angular/router';

/*
https://github.com/trashvin/watch-my-budget-app
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeStateTrigger
  ]
})
export class AppComponent implements OnInit {

  constructor(private stitchService: StitchService) {

  }

  ngOnInit(): void {
  }

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }
}
