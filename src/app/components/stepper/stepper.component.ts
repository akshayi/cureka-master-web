import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  completed = false;
  list: any;



  constructor(private mixpanal: MixpanelServiceService) {}

  ngOnInit() {
    this.mixpanal.track("Page Loaded - symptoms page");
    this.list = [
      {
        day: 'Start Today'
      },
      {
        day: '2 Day Ago'
      },
      {
        day: '3 Day Ago'
      }, {
        day: '4 Day Ago'
      },
      {
        day: '5 Day Ago'
      }, {
        day: '6 Day Ago'
      }, {
        day: 'A week Ago'
      }
    ]
  }

  completeStep(): void {
    this.completed = true;
  }
}
