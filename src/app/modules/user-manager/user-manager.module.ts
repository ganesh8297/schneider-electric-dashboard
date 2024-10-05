import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagerRoutingModule } from './user-manager-routing.module';
import { UserManagerComponent } from './user-manager/user-manager.component';


@NgModule({
  declarations: [
    UserManagerComponent
  ],
  imports: [
    CommonModule,
    UserManagerRoutingModule
  ]
})
export class UserManagerModule { }
