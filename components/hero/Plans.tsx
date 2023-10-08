'use client';

import { useState } from 'react';

type FeatureType = { title: string; description: string; icon: string };

type PlansCardProps = {
	title: string;
	price: number;
	description: string;
	size: number;
	features: FeatureType[];
	featured: boolean;
};

const plans: PlansCardProps[] = [
	{ title: 'Free', description: '', size: 2, price: 0, features: [], featured: false },
	{ title: 'Regular', description: '', size: 50, price: 25, features: [], featured: true },
	{ title: 'Insane', description: '', size: 200, price: 100, features: [], featured: false },
];

const PlansCard = ({ title, size, price, features, featured }: PlansCardProps) => {
	return (
		<div key={price} className=''>
			<h3 className='text-xl font-semibold'>{title}</h3>
		</div>
	);
};

const Plans = () => {
	const [billingPeriod, setBillingPeriod] = useState<number>(1);
	return (
		<div>
			<h2 className='text-3xl my-4 font-bold'>Choose your plan</h2>
			<div className='grid grid-cols-3 max-w-4xl mx-auto'>
				{plans.map((plan) => (
					<PlansCard key={plan.title} {...plan} />
				))}
			</div>
		</div>
	);
};

export default Plans;
