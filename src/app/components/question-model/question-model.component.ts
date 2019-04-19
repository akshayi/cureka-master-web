import { Component, OnInit } from '@angular/core';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';


@Component({
  selector: 'app-question-model',
  templateUrl: './question-model.component.html',
  styleUrls: ['./question-model.component.css']
})

export class QuestionModelComponent implements OnInit {

  constructor(private mixpanal: MixpanelServiceService) { }
  ngOnInit() {
   
  }

}



