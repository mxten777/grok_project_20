'use client';

import { memo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  생산량: number;
  효율성: number;
}

interface PerformanceChartProps {
  data: ChartData[];
}

const PerformanceChart = memo(({ data }: PerformanceChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="생산량" fill="#3B82F6" />
        <Bar dataKey="효율성" fill="#10B981" />
      </BarChart>
    </ResponsiveContainer>
  );
});

PerformanceChart.displayName = 'PerformanceChart';

export default PerformanceChart;