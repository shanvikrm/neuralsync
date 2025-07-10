import React from 'react';

export const StatsCard = ({ title, value, delta, icon, color }) => {
  const bg = {
    blue: 'bg-blue-100',
    green: 'bg-green-100',
    purple: 'bg-purple-100',
    orange: 'bg-orange-100',
  }[color] || 'bg-gray-100';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs sm:text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-xl sm:text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-xs sm:text-sm text-green-600 mt-1">{delta}</p>
        </div>
        <div className={`w-10 h-10 sm:w-12 sm:h-12 ${bg} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
      </div>
    </div>
  );
};
