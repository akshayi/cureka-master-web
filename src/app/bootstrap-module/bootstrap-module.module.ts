import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    ButtonsModule,
    ModalModule.forRoot()
  ],
  exports: [
    ButtonsModule,
    ModalModule
  ]
})
export class BootstrapModuleModule { }
