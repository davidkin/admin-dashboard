import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { IHighchart } from '../../interfaces/chart/highchart.interface';
import resizeEvent from '../../utils/resize';

@Component({
  selector: 'app-widget-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() label: string;
  @Input() total: string;
  @Input() percentage: string;
  @Input() chartOptions: IHighchart;

  highcharts = Highcharts;

  constructor() { }

  ngOnInit() {
    HC_exporting(this.highcharts);

    resizeEvent();
  }

}
