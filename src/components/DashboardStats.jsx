import React from 'react';
import { StatsCard } from './StatsCard';
import { Users, TrendingUp, Activity, BarChart3 } from 'lucide-react';

export const DashboardStats = () => (
  <div className="grid grid-cols-1 min-w-0 gap-y-2 gap-x-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 md:gap-6 mb-4 md:mb-6">
    <StatsCard
      title="Total Users"
      value="24,567"
      delta="+12.5% from last month"
      icon={<Users className="w-6 h-6 text-blue-600" />}
      color="blue"
    />
    <StatsCard
      title="Revenue"
      value="$89,432"
      delta="+8.2% from last month"
      icon={<TrendingUp className="w-6 h-6 text-green-600" />}
      color="green"
    />
    <StatsCard
      title="Engagement"
      value="94.2%"
      delta="+5.1% from last month"
      icon={<Activity className="w-6 h-6 text-purple-600" />}
      color="purple"
    />
    <StatsCard
      title="Conversion"
      value="3.2%"
      delta="+0.8% from last month"
      icon={<BarChart3 className="w-6 h-6 text-orange-600" />}
      color="orange"
    />
  </div>
);
