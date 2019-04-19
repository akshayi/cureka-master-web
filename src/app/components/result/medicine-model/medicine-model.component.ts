import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';

@Component({
  selector: 'app-medicine-model',
  templateUrl: './medicine-model.component.html',
  styleUrls: ['./medicine-model.component.scss']
})
export class MedicineModelComponent implements OnInit {

  constructor(public modalRef: BsModalRef, private mixpanal: MixpanelServiceService) { }

  ngOnInit() {
    this.mixpanal.track("Page Loaded -medicine detail page");
  }

  ngOnDestroy() {
  
  }
}
