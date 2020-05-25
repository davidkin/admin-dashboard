import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/app/shared/services/chart.service';
import { IHighchart } from 'src/app/shared/interfaces/highchart.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  areaChartSettings: IHighchart;
  pieChartSettings: IHighchart;
  cardChartSettings: IHighchart;

  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit() {
    const areaChartData = {
      type: 'area',
      title: 'Random Data',
      subtitle: 'Demo',
      series: [
        { name: 'Asia', data: [502, 635, 809, 947, 1402, 3634, 5268] },
        { name: 'Africa', data: [106, 107, 111, 133, 221, 767, 1766] },
        { name: 'Europe', data: [163, 203, 276, 408, 547, 729, 628] },
        { name: 'America', data: [18, 31, 54, 156, 339, 818, 1201] },
        { name: 'Oceania', data: [2, 2, 2, 6, 13, 30, 46] }
      ]
    };

    const cardAreaChartData = {
      type: 'area',
      subType: 'card',
      series: [
        { data: [71, 70, 39, 66] }
      ]
    };

    const pieChartData = {
      type: 'pie',
      title: 'Random Data',
      series: [
        {
          name: 'Brands',
          colorByPoint: true,
          data: [
            { name: 'Chrome', y: 61.41, sliced: true, selected: true },
            { name: 'Internet Explorer', y: 11.84 },
            { name: 'Firefox', y: 10.85 },
            { name: 'Edge',  y: 4.67 },
            { name: 'Safari', y: 4.18 },
            { name: 'Other', y: 7.05 }
          ]
        }
      ]
    };

    this.areaChartSettings = this.chartService.createChart(areaChartData);
    this.pieChartSettings = this.chartService.createChart(pieChartData);
    this.cardChartSettings = this.chartService.createChart(cardAreaChartData);
  }

}
