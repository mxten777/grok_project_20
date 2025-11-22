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
    <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#6B7280" />
          <XAxis dataKey="name" stroke="#6B7280" />
          <YAxis stroke="#6B7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#374151',
              border: 'none',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
          />
          <Bar dataKey="생산량" fill="#3B82F6" radius={[4, 4, 0, 0]} />
          <Bar dataKey="효율성" fill="#10B981" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
});

PerformanceChart.displayName = 'PerformanceChart';

export default PerformanceChart;