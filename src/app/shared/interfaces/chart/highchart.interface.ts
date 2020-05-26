import { IChart } from './chart.interface';
import { ITitle } from './title.interface';
import { ISubtitle } from './subtitle.interface';
import { ITooltip } from './tooltip.interface';
import { ICredits } from './credits.interface';
import { IExporting } from './exporting.interface';
import { IAccessibility } from './accessibility.interface';
import { IPlotoption } from './plotoption.interface';
import { ILegend } from './legend.interface';
import { IAsis } from './asis.interface';

export interface IHighchart {
    chart: IChart;
    title: ITitle;
    subtitle: ISubtitle;
    tooltip: ITooltip;
    credits: ICredits;
    exporting: IExporting;
    plotOptions?: IPlotoption;
    accessibility?: IAccessibility;
    legend?: ILegend;
    xAsis?: IAsis;
    yAsis?: IAsis;
    series: [];
}
