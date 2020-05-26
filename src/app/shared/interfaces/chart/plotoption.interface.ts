export interface IDataLabels {
    enabled: boolean;
}

export interface IPie {
    allowPointSelect: boolean;
    cursor: string;
    dataLabels: IDataLabels;
    showInLegend: true;
}

export interface IPlotoption {
    pie?: IPie;
}
