interface ILabels {
    enabled: boolean;
}

interface ITitle {
    text: string | null;
}

export interface IAsis {
    labels?: ILabels;
    title?: ITitle;
    startOnTick?: boolean;
    endOnTick?: boolean;
    tickOptions?: [];
}
