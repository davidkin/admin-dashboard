import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { IHighchart } from '../../interfaces/chart/highchart.interface';
import resizeEvent from '../../utils/resize';

@Component({
  selector: 'app-widget-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.scss']
})
export class AreaChartComponent implements OnInit {
  @Input() chartOptions: IHighchart;

  highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
    HC_exporting(this.highcharts);

    resizeEvent();
  }

}
