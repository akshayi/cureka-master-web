import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { StepperComponent } from '../stepper/stepper.component';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  list: any;
  bsModalRef: BsModalRef;
  selectedUsers2 = [];
  config = {
    animated: true,
    keyboard: true,
    backdrop: false,
    ignoreBackdropClick: true,
  }

  constructor(private staticModal: BsModalService, private mixpanal: MixpanelServiceService) { }

  ngOnInit() {
    this.mixpanal.track("Page Loaded - Search page");

    this.list = [
      {
        login: 'cough'
      }, {
        login: 'fever'
      },
      {
        login: 'fea'
      }, {
        login: 'feb'
      },
      {
        login: 'sore-throat'
      }, {
        login: 'runny-nose'
      }, {
        login: 'flu'
      },
      {
        login: 'fox'
      }, {
        login: 'cox'
      },
    ]
  }


  openQuestionModal() {
    this.mixpanal.track("Click - Search");
    this.bsModalRef = this.staticModal.show(StepperComponent, this.config);
  }

}
