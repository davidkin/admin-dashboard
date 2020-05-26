import { IValueSuffix } from './valuesuffix.interface';

export interface ITooltip {
    split?: boolean;
    valueSuffix?: IValueSuffix;
    pointFormat?: string;
}
