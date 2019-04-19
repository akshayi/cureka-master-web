import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MedicineModelComponent } from './medicine-model/medicine-model.component';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  list: any;

  bsModalRef: BsModalRef;
  config = {
    animated: true,
    keyboard: true,
    backdrop: false,
    ignoreBackdropClick: true,
  }

  constructor(private medicineModel: BsModalService, private mixpanal: MixpanelServiceService) {}

  ngOnInit() {
    this.mixpanal.track("Page Loaded -Medicine Search result page");

    this.list = [
      {
        text: "Medicine A",
        image: "image A"
      },
      {
        text: "Medicine A",
        image: "image A"
      },
      {
        text: "Medicine A",
        image: "image A"
      },
      {
        text: "Medicine A",
        image: "image A"
      },
      {
        text: "Medicine A",
        image: "image A"
      },
      {
        text: "Medicine A",
        image: "image A"
      },
      {
        text: "Medicine A",
        image: "image A"
      },
      {
        text: "Medicine A",
        image: "image A"
      },
      {
        text: "Medicine A",
        image: "image A"
      }
    ]
  }

  openQuestionModal() {
    this.bsModalRef = this.medicineModel.show(MedicineModelComponent, this.config);
  }

}
