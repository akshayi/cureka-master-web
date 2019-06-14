import { Component, ChangeDetectorRef, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Directionality } from '@angular/cdk/bidi';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.css'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }],
})
export class CustomStepperComponent extends CdkStepper implements OnInit {
  @Input() questions: any[];
  @Input() selectedSymptoms: any;
  @Input() formValid: boolean;
  @Input() lastIndex;
  @Output() updatePreviousIndex = new EventEmitter<any>();
  index = [];
  isLast: number;
  currentIndex = 1;
  constructor(
    public modalRef: BsModalRef, _dir: Directionality, _changeDetectorRef: ChangeDetectorRef,
    private mixPanel: MixpanelServiceService,
    private router: Router
  ) {
    super(_dir, _changeDetectorRef);
  }

  selectedIndex
  ngOnInit() {
    this.mixPanel.track('Page Loaded - symptoms page');
    this.setStepperIndex();
  }

  setStepperIndex() {
    if (this.questions.length >= 3) {
      this.index.push(1);
      if (this.questions.length >= 7) {
        this.index.push(2);
        if (this.questions.length >= 11) {
          this.index.push(3);
          if (this.questions.length >= 15) {
            this.index.push(4);
            if (this.questions.length >= 19) {
              this.index.push(5);
              if (this.questions.length >= 23) {
                this.index.push(6)
              }
            }
          }
        }
      }
    }
    this.isLast = this.index.length;
  }

  onClick(index: number): void {
    this.selectedIndex = index;
  }

  incrementIndex() {
    if (this.formValid) {
      if (this.currentIndex < this.index.length) {
        this.currentIndex++;

      }
      this.updatePreviousIndex.emit(this.lastIndex);
    }

  }

  showResult() {
    this.router.navigate(['/result'], { queryParams: this.selectedSymptoms.map(value => value.value) });
    this.modalRef.hide();
  }

}
