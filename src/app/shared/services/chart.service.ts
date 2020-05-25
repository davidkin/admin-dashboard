import { Injectable } from '@angular/core';
import { IHighchart } from '../interfaces/highchart.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }


  createChart(setting) {
    const { type, title, subtitle, series, subType } = setting;

    const chartSetting: IHighchart = {
      chart: {
        type,
        subType
      },
      title: {
        text: title || null
      },
      subtitle: {
        text: subtitle || null
      },
      tooltip: {
        split: true,
      },
      plotOptions: {},
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      legend: {},
      xAsis: {},
      yAsis: {},
      series
    };

    this.udpateChartSetting(chartSetting);

    console.log(chartSetting);

    return chartSetting;
  }

  udpateChartSetting(chartSetting) {

    if (chartSetting.chart.type === 'area' && !chartSetting.chart.subType) {
      chartSetting.tooltip.valueSuffix = ' millions';
    } else if (chartSetting.chart.type === 'pie') {
      chartSetting.chart = {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      };

      chartSetting.tooltip = {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      };

      chartSetting.accessibility = {
        point: {
          valueSuffix: '%'
        }
      };

      chartSetting.plotOptions = {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      };
    } else if (chartSetting.chart.subType && chartSetting.chart.subType === 'card') {
      chartSetting.legend = {
        enabled: false
      };

      chartSetting.xAsis = {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
      };

      chartSetting.yAsis = { ...chartSetting.xAsis };
    }
  }

}
