import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { MedicineModelComponent } from './medicine-model/medicine-model.component';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';
import medicineDetails from './medicine-details';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  list: any;
  medicalDetails: any;
  queryData: any;
  selectedSymptoms: any[];
  medicine: any[];
  isFound: boolean;


  config = {
    animated: true,
    keyboard: true,
    backdrop: false,
    ignoreBackdropClick: true,
  }

  constructor(
    private medicineModel: BsModalService,
    private route: ActivatedRoute,
    private mixpanal: MixpanelServiceService,

  ) {
    this.medicine = [];
  }

  ngOnInit() {
    this.mixpanal.track('Page Loaded -Medicine Search result page');
    this.medicalDetails = medicineDetails['medicine-details'];
    this.route.queryParams.subscribe(data => { this.queryData = data; });
    this.setMedicine()
  }

  setMedicine() {
    this.selectedSymptoms = Object.keys(this.queryData).map(key => {
      return this.queryData[key];
    });
    this.medicalDetails.map((symptom) => {
      this.isFound = false;
      this.selectedSymptoms.map(a => {
        symptom.Symptoms.map(b => {
          if (b === a) {
            return this.isFound = true;
          }
          return false;
        });
      });
      if (this.isFound) {
        this.medicine.push(symptom);
      }
    });
  }



  openQuestionModal(medicine) {
    this.medicineModel.show(MedicineModelComponent, { initialState: { medicine: medicine } });
  }

}
