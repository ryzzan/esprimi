export interface ChartInterface {
  title?: string;
  subtitle?: string;
  bar?: ChartBarInterface;
  bubble?: ChartBubbleInterface;
  doughnut?: ChartDoughtnutInterface;
  pie?: ChartPieInterface;
  line?: ChartLineInterface;
  polarArea?: ChartPolaAreaInterface;
  radar?: ChartRadarInterface;
  scatter?: ChartScatterInterface;
};

// https://www.chartjs.org/docs/latest/charts/bar.html

export interface ChartBarInterface {
  id: string;
  labels: Array<string>;
  datasets: [{
    data: Array<number>;
    label?: string;
    backgroundColor?: Array<string>; // Default: 'rgba(0, 0, 0, 0.1)'
    borderColor?: Array<String>;
    borderWidth?: number;
    base?: number;
    barPercentage?: number;
    barThickness?: number | string;
    maxBarThickness: number;
    minBarLength: number;
  }];
};

// https://www.chartjs.org/docs/latest/charts/bubble.html
export interface ChartBubbleInterface {
  id: string;
  datasets: [{
    data: [{
      x: number;
      y: number;
      r: number; // Bubble radius in pixels (not scaled).
    }];
    label?: string;
    backgroundColor?: string; // Default: 'rgba(0, 0, 0, 0.1)'
    borderColor?: Array<String>;
    borderWidth?: number;
  }];
};

// https://www.chartjs.org/docs/latest/charts/doughnut.html
export interface ChartDoughtnutInterface {
  id: string;
  labels: Array<string>;
  datasets: [{
    data: Array<number>;
    label?: string;
    backgroundColor?: Array<string>; // Default: 'rgba(0, 0, 0, 0.1)'
    borderAlign?: Enumerator<'center'|'inner'>;
    borderColor?: Array<String>;
    borderWidth?: number;
    borderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    borderRadius?: number | object;
    circumference?: number;
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    hoverBoderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    hoverBorderWidth?: number;
    hoverOffset?: number;
  }];
};

export interface ChartPieInterface {
  id: string;
  labels: Array<string>;
  datasets: [{
    data: Array<number>;
    label?: string;
    backgroundColor?: Array<string>; // Default: 'rgba(0, 0, 0, 0.1)'
    borderAlign?: Enumerator<'center'|'inner'>;
    borderColor?: Array<String>;
    borderWidth?: number;
    borderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    borderRadius?: number | object;
    circumference?: number;
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    hoverBoderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    hoverBorderWidth?: number;
    hoverOffset?: number;
  }];
};

// https://www.chartjs.org/docs/latest/charts/line.html
export interface ChartLineInterface {
  id: string;
  labels: Array<string>;
  datasets: [{
    data: Array<number>;
    label?: string;
    backgroundColor?: Array<string>; // Default: 'rgba(0, 0, 0, 0.1)'
    borderAlign: Enumerator<'center' | 'inner'>;
    borderColor?: Array<String>;
    borderDash?: Array<number>;
    borderDashOffset?: number;
    borderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    borderWidth?: number;
    fill?: boolean;
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    hoverBoderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    hoverBorderWidth?: number;
    order?:number;
    tension?: number;
  }];
};

// https://www.chartjs.org/docs/latest/charts/polar.html
export interface ChartPolaAreaInterface {
  id: string;
  labels: Array<string>;
  datasets: [{
    data: Array<number>;
    label?: string;
    backgroundColor?: Array<string>; // Default: 'rgba(0, 0, 0, 0.1)'
    borderAlign: Enumerator<'center' | 'inner'>;
    borderColor?: Array<String>;
    borderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    borderWidth?: number;
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    hoverBoderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    hoverBorderWidth?: number;
  }];
};

// https://www.chartjs.org/docs/latest/charts/radar.html
export interface ChartRadarInterface {
  id: string;
  labels: Array<string>;
  datasets: [{
    data: Array<number>;
    label?: string;
    backgroundColor?: Array<string>; // Default: 'rgba(0, 0, 0, 0.1)'
    borderCapStyle?: string; 
    borderColor?: Array<string>;
    borderDash?: Array<string>;
    borderDashOffset?: number;
    borderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    borderWidth?: number;
    fill?: boolean;
    hoverBackgroundColor?: string;
    hoverBorderColor?: string;
    hoverBoderJoinStyle?: Enumerator<'round'|'bevel'|'miter'>;
    hoverBorderWidth?: number;
    pointBackgroundColor?: string;
    pointBorderColor?: string;
    pointHoverBackgroundColor?: string;
    pointHoverBorderColor?: string;
  }];
};

// https://www.chartjs.org/docs/latest/charts/scatter.html
export interface ChartScatterInterface {
  id: string;
  labels: Array<string>;
  datasets: [{
    data: [{
      x: number;
      y: number;
    }];
    label?: string;
    backgroundColor?: Array<string>; // Default: 'rgba(0, 0, 0, 0.1)'
  }];
};