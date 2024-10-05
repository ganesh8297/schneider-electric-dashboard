import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../../components/header/header.component';
import { AngularMaterialModule } from '../../material/angular-material/angular-material.module';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    HeaderComponent,
    AngularMaterialModule
  ]
})
export class SharedModule { }
