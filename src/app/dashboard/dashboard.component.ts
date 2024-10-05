import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  subSideBar: string = 'Generate Project Report';
  seletectSideNavbar: string = ''
  getSelectedSideNav(event: any) {
    this.seletectSideNavbar = event;
    console.log(this.seletectSideNavbar);
    
  }

  getSelectedSubSideNav(event:any){
    this.subSideBar = event;
    console.log(event);
  }
}


