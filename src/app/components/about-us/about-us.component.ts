import { Component, OnInit } from '@angular/core';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  list: any;
  constructor(private mixpanal: MixpanelServiceService) { }

  ngOnInit() {
    this.mixpanal.track("Page Loaded - About-us page");
  

    this.list = [{
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, falli graeci ut vix. Porro" +
        " nostro veritus est id, cum no posidonium eloquentiam. Vidit essent debitis in cum, cu eum mundi alterum deserunt. Ut dicunt" +
        " nostro veritus est id, cum no posidonium eloquentiam. Vidit essent debitis in cum, cu eum mundi alterum deserunt. Ut dicunt"
    }, {
      title: "Lorem ipsum 2",
      description: "Lorem ipsum dolor sit amet, falli graeci ut vix. Porro" +
        " nostro veritus est id, cum no posidonium eloquentiam. Vidit essent debitis in cum, cu eum mundi alterum deserunt. Ut dicunt" +
        " nostro veritus est id, cum no posidonium eloquentiam. Vidit essent debitis in cum, cu eum mundi alterum deserunt. Ut dicunt"
    }]
  }

  home(){
    this.mixpanal.track("Clicked - Home");
  }

}
