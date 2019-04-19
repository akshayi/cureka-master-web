import { Component, OnInit } from '@angular/core';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor(private mixpanal: MixpanelServiceService) {
  }

  ngOnInit() {
    this.mixpanal.track("Page Loaded -Menu");
  }
}
