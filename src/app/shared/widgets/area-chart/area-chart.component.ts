import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { IHighchart } from '../../interfaces/highchart.interface';

@Component({
  selector: 'app-widget-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  @Input() chartOptions: IHighchart;

  highcharts = Highcharts;

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
