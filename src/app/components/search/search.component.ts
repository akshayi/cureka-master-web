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
  selectedSymptoms = [];
  config = {
    animated: true,
    keyboard: true,
    backdrop: false,
    ignoreBackdropClick: true,
  }

  constructor(private staticModal: BsModalService, private mixPanel: MixpanelServiceService) { }

  ngOnInit() {
    this.mixPanel.track("Page Loaded - Search page");

    this.list = [
      {
        id: 1,
        value: 'sore-throat'
      }, {
        id: 2,
        value: 'runny-nose'
      },
      {
        id: 3,
        value: 'cough'
      }, {
        id: 4,
        value: 'fever'
      },
      {
        id: 5,
        value: 'fea'
      }, {
        id: 6,
        value: 'feb'
      }, {
        id: 7,
        value: 'flu'
      },
      {
        id: 8,
        value: 'fox'
      }, {
        id: 9,
        value: 'cox'
      },
    ]
  }


  openQuestionModal(selectedSymptoms) {
    this.mixPanel.track("Click - Search");
    if (selectedSymptoms.length > 0) {
      this.bsModalRef = this.staticModal.show(StepperComponent, { initialState: { selectedSymptoms: selectedSymptoms } });
    }
  }
}
