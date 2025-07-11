import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { dashboardData } from '../data/dashboardData';
import { pieData } from '../data/pieData';
import { motion } from 'framer-motion';

const chartVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18, type: 'spring', stiffness: 80 }
  })
};

export const DashboardCharts = () => (
  <>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={chartVariants}
          whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(139,92,246,0.10)' }}
        >
          {i === 0 ? (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Monthly Growth</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dashboardData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#666" />
                  <YAxis stroke="#666" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Line type="monotone" dataKey="users" stroke="#8b5cf6" strokeWidth={3} dot={{ fill: '#8b5cf6', strokeWidth: 2 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Device Usage</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </motion.div>
      ))}
    </div>
    <motion.div
      custom={2}
      initial="hidden"
      animate="visible"
      variants={chartVariants}
      whileHover={{ scale: 1.02, boxShadow: '0 8px 32px 0 rgba(139,92,246,0.10)' }}
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
        <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-4">Revenue Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dashboardData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="name" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar dataKey="revenue" fill="#f472b6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  </>
);
