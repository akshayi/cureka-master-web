import { Component, ChangeDetectorRef } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Directionality } from '@angular/cdk/bidi';
import { MixpanelServiceService } from 'src/app/core/services/mixpanel-service.service';

@Component({
  selector: 'app-custom-stepper',
  templateUrl: './custom-stepper.component.html',
  styleUrls: ['./custom-stepper.component.css'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }],
})
export class CustomStepperComponent extends CdkStepper {
  indexs = [1, 2, 3, 4]
  currentIndex = 1
  constructor(public modalRef: BsModalRef, _dir: Directionality, _changeDetectorRef: ChangeDetectorRef, private mixpanal: MixpanelServiceService) {
    super(_dir, _changeDetectorRef);
  }

  ngOnInIt() {
    this.mixpanal.track("Page Loaded - symptoms page");
  }

  onClick(index: number): void {
    this.selectedIndex = index;
  }

  incrementIndex() {
    if (this.currentIndex < this.indexs.length) {
      this.currentIndex++
    }
  }
}
