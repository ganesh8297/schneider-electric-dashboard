import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {
  @Input() sideNav: any;
  @Output() subSideNav: any = new EventEmitter();

  selectedSidebar: any = 'Generate Project Report'

  options: any = [
    {
      title: 'Generate Project Report',
      active: true
    },
    {
      title: 'CP Vs HMI Comparison',
      active: false
    }, {
      title: 'CP Vs TAG Comparison',
      active: false
    },
    {
      title: 'Comparison to Best Practices',
      active: false
    },
  ]

  dataList: any = [
    {
      title: 'Blocks Report',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus recusandae corrupti sapiente perspiciatis laboriosam sint unde consequuntur expedita, quae'
    },
    {
      title: 'IO Report',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus recusandae corrupti sapiente perspiciatis laboriosam sint unde consequuntur expedita, quae'
    },
    {
      title: 'CS Report',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus recusandae corrupti sapiente perspiciatis laboriosam sint unde consequuntur expedita, quae'
    },
    {
      title: 'Displays Report',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum delectus recusandae corrupti sapiente perspiciatis laboriosam sint unde consequuntur expedita, quae'
    },
  ]

  setActive(title: string) {
    this.options.filter((ele: any) => ele.title == title ? ele.active = true : ele.active = false);
    this.selectedSidebar = title;
    this.subSideNav.emit(title)
  }

}
