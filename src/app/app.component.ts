import {Component} from '@angular/core';
import {StitchService} from './core/services/stitch.service';

/*
https://github.com/trashvin/watch-my-budget-app
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private stitchService: StitchService) {
    this.stitchService.test();
  }
}
