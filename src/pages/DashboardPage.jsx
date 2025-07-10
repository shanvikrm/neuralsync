import React from 'react';
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardSidebar } from '../components/DashboardSidebar';
import { DashboardStats } from '../components/DashboardStats';
import { DashboardCharts } from '../components/DashboardCharts';

export const DashboardPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <DashboardSidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <div className="flex-1 flex flex-col min-h-screen">
        <DashboardHeader mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <main className="flex-1 p-1 sm:p-2 md:p-6 lg:p-8 max-w-full md:max-w-7xl w-full mx-auto">
          <div className="mb-1 md:mb-4">
            <h1 className="text-base md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600 text-xs md:text-sm lg:text-base">Welcome back! Here's what's happening with your data today.</p>
          </div>
          <DashboardStats />
          <DashboardCharts />
        </main>
      </div>
    </div>
  );
};
