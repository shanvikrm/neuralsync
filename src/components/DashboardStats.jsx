import React from 'react';
import { StatsCard } from './StatsCard';
import { Users, TrendingUp, Activity, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
	{
		title: 'Total Users',
		value: '24,567',
		delta: '+12.5% from last month',
		icon: <Users className="w-6 h-6 text-blue-600" />,
		color: 'blue',
	},
	{
		title: 'Revenue',
		value: '$89,432',
		delta: '+8.2% from last month',
		icon: <TrendingUp className="w-6 h-6 text-green-600" />,
		color: 'green',
	},
	{
		title: 'Engagement',
		value: '94.2%',
		delta: '+5.1% from last month',
		icon: <Activity className="w-6 h-6 text-purple-600" />,
		color: 'purple',
	},
	{
		title: 'Conversion',
		value: '3.2%',
		delta: '+0.8% from last month',
		icon: <BarChart3 className="w-6 h-6 text-orange-600" />,
		color: 'orange',
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.15, type: 'spring', stiffness: 80 },
	}),
};

export const DashboardStats = () => (
	<div className="grid grid-cols-1 min-w-0 gap-y-2 gap-x-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 md:gap-6 mb-4 md:mb-6">
		{stats.map((stat, i) => (
			<motion.div
				key={stat.title}
				custom={i}
				initial="hidden"
				animate="visible"
				variants={cardVariants}
				whileHover={{
					scale: 1.04,
					boxShadow: '0 8px 32px 0 rgba(139,92,246,0.12)',
				}}
				transition={{ type: 'spring', stiffness: 200 }}
			>
				<StatsCard {...stat} />
			</motion.div>
		))}
	</div>
);
