import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { QuestionModelComponent } from './components/question-model/question-model.component';
import { BootstrapModuleModule } from './bootstrap-module/bootstrap-module.module';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CustomStepperComponent } from './components/stepper/custom-stepper/custom-stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { ResultComponent } from './components/result/result.component';
import { MedicineModelComponent } from './components/result/medicine-model/medicine-model.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionModelComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    SearchComponent,
    StepperComponent,
    CustomStepperComponent,
    ResultComponent,
    MedicineModelComponent,
    AboutUsComponent,

  ],
  imports: [
    BrowserModule,
    BootstrapModuleModule,
    AppRoutingModule,
    CdkStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    StepperComponent,
  ],
  providers: [],
  entryComponents: [StepperComponent, MedicineModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
