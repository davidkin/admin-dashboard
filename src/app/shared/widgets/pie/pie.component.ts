import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { IHighchart } from '../../interfaces/highchart.interface';

@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  highcharts = Highcharts;
  @Input() chartOptions: IHighchart;

  constructor() { }

  ngOnInit() {
    HC_exporting(this.highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
