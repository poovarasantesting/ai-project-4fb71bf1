import React from "react";

interface ChartProps {
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
    }[];
  };
  height?: number;
}

export function LineChart({ data, height = 400 }: ChartProps) {
  return (
    <div style={{ height: `${height}px` }}>
      {/* This is a placeholder component. In a real application, you would use a charting library like Chart.js, Recharts, etc. */}
      <div className="h-full w-full bg-muted/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Line Chart: {data.datasets[0].label}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Data points: {data.datasets[0].data.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export function BarChart({ data, height = 400 }: ChartProps) {
  return (
    <div style={{ height: `${height}px` }}>
      {/* This is a placeholder component. In a real application, you would use a charting library like Chart.js, Recharts, etc. */}
      <div className="h-full w-full bg-muted/20 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Bar Chart: {data.datasets[0].label}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Data points: {data.datasets[0].data.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}