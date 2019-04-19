import { Component } from '@angular/core';
import { MixpanelServiceService } from './core/services/mixpanel-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cureka';

  constructor(private mixpanal: MixpanelServiceService) {

  }
  ngOnInit() {
    this.mixpanal.track("Site loaded");
  }

}
