import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  isSidebarOpen = true;

  constructor() { }

  ngOnInit() { }

  sidebarToggler() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
