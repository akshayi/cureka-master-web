import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';
import symptomsQuestions from './symptoms-questions';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import medicineDetails from '../result/medicine-details'
import { from } from 'rxjs';
import { CdkStep } from '@angular/cdk/stepper';



@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  @ViewChild('step1') step1: CdkStep;
  previousIndex: any;
  medicine: any[];
  step: any[]
  form: FormGroup;
  list: any;
  isFound: boolean;
  selectedSymptoms: any;
  questions: any[];
  lastIndex: number = 5;
  constructor(
    private mixpanal: MixpanelServiceService,
    public modalRef: BsModalRef,
    public fb: FormBuilder,
    public cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.medicine = medicineDetails['medicine-details']
    this.mixpanal.track('Page Loaded - symptoms page');
    this.findSymptomsQuestions();

  }

  createControl() {
    const group = this.fb.group({});
    this.step.map((name, index) => {
      if (name.dependent !== true) {
        group.addControl(name.name, this.fb.control('', [Validators.required]));
      } else {
        group.addControl(name.name, this.fb.control(''));
      }

    });
    return group;
  }

  findSymptomsQuestions() {
    this.questions = [];
    symptomsQuestions['symptoms-Questions'].Questions.map((symptom) => {
      this.isFound = false;
      this.selectedSymptoms.map(a => {
        symptom.symptoms.some(b => {
          if (b.id === a.id) {
            return this.isFound = true;
          }
          return false;
        });
      });
      if (this.isFound) {
        this.questions.push(symptom);
      }
    });
    this.convertsInSteps();

  }

  convertsInSteps() {
    this.step = [],
      this.questions.map((question, index) => {
        if (!this.previousIndex) {
          if (index <= 3) {
            this.step.push(question);
          }
        } else if (this.previousIndex) {
          if (this.previousIndex < index && (this.previousIndex + 4) >= index) {
            this.step.push(question);
          }
        }
      });
    this.form = this.createControl();
  }

  updatePreviousIndex(value) {
    this.previousIndex = value;
    this.convertsInSteps();
  }


  changeRadioValue(index, form, isLast, value) {
    if (form) {

      if (value.key === 'yes') {
        this.questions.map((res) => {
          if (res.id === form) {
            res.dependent = false;
            if (isLast !== true) {
              this.form.get(res.name).setValidators(Validators.compose([Validators.required]));
              this.form.get(res.name).updateValueAndValidity();
            }
          }
        });
      } else {
        this.questions.map((res) => {
          if (res.id === form) {
            res.dependent = true;
            if (isLast !== true) {
              this.form.get(res.name).setValidators(Validators.compose([]));
              this.form.get(res.name).updateValueAndValidity();
            }
          }
        });
      }
      this.step1.reset();
    }
    if (isLast === true) {
      if (this.previousIndex) {
        this.lastIndex = index + this.previousIndex;
      } else {
        this.lastIndex = index;
      }
    }
  }


}
