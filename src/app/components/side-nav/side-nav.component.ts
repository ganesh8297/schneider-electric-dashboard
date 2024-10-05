import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {

  @Output() sideNav:any = new EventEmitter()

  options: any = [
    {
      title: 'Home',
      active: false,
      url:'../../../assets/icons/house.svg'

    },
    {
      title: 'Reports',
      active: true,
      url: './../../assets/icons/card-checklist.svg'
    }
  ]

  setActive(title: string) {
    this.options.filter((ele: any) => ele.title == title ? ele.active = true : ele.active = false);
    console.log(this.options);
    this.sideNav.emit(title)
  }

}
