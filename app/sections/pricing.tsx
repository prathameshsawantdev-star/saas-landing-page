import React from 'react';
import { Check, Tag } from 'lucide-react';

// Define the colors used in the layout for consistency
const COLORS = {
  primary: 'rgb(52, 211, 163)', // A light emerald/green for emphasis
  darkButton: 'rgb(17, 24, 39)', // Dark gray for the Pro button
  lightText: 'rgb(107, 114, 128)', // Gray-500
};

// --- Badge Component (for "Pro" Card)
const PopularBadge = () => (
  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div className="bg-primary px-3 py-1 rounded-full text-xs font-semibold text-white shadow-lg">
      Popular
    </div>
  </div>
);

// --- Feature List Component
const FeatureList = ({ features, accentColor }:{ features: any, accentColor: any}) => (
  <div className="flex flex-col gap-y-3 px-2 mt-8 text-tertiary-text">
    {features.map((feature: any, index:any) => (
      <div key={index} className="flex gap-x-3 text-sm items-start">
        <Check size={18} />
        <span className="text-[15px]">{feature}</span>
      </div>
    ))}
  </div>
);

// --- Card Component (Basic/Standard)
const Card = () => {
  const features = [
    'Get a fully designed Website.',
    'Webflow Development',
    'Limited Support'
  ];

  return (
    <div className='flex-1 w-full max-w-sm bg-background rounded-xl p-8 flex flex-col justify-between border border-tertiary-text-light shadow-xl/30 hover:shadow-2xl transition-shadow duration-300'>
      <div className='flex flex-col items-center'>
        
        <h3 className='text-center text-3xl text-primary-text font-extrabold mb-4'>
          Basic
        </h3>
        
        <p className='text-center text-sm text-secondary-text px-2'>
          Get a professional website designed according to your needs.
        </p>

        {/* Price */}
        <div className='flex mt-10 items-end justify-center mb-8'>
          <h3 className='text-5xl text-primary-text font-bold'>$499</h3>
          <p className='text-secondary-text text-base'> /month</p>
        </div>

        {/* Features */}
        <FeatureList features={features} accentColor={COLORS.lightText} />
      </div>

      {/* Button - pushed to bottom by justify-between */}
      <div className="mt-12">
        <button className='w-full py-3.5 rounded-xl text-base font-semibold bg-secondary-button text-primary-text border border-tertiary-text transition-colors duration-200 hover:bg-gray-100/50'>
          Get started
        </button>
      </div>
    </div>
  );
};

// --- CardPro Component (Pro/Popular)
const CardPro = () => {
  const features = [
    'Get a fully designed Website.',
    'Webflow Development',
    'Limited Support',
    'Standard integrations',
    'Email support'
  ];

  return (
    <div className='relative flex-1 w-full max-w-sm bg-background rounded-xl p-8 flex flex-col justify-between border border-primary shadow-xl ring-2 ring-primary transform scale-105 transition-all duration-300'>
      
      {/* Popular Badge */}
      <PopularBadge />

      <div className='flex flex-col items-center'>
        <h3 className='text-center text-3xl text-primary font-extrabold mb-4'>
          Pro
        </h3>
        <p className='text-center text-sm text-secondary-text px-2'>
          Get a professional website designed according to your needs.
        </p>

        {/* Price */}
        <div className='flex mt-10 items-end justify-center mb-8'>
          <h3 className='text-5xl text-primary-text font-bold'>$699</h3>
          <p className='text-secondary-text text-base'> /month</p>
        </div>

        {/* Features */}
        <FeatureList features={features} accentColor={COLORS.primary} />
      </div>

      {/* Button */}
      <div className="mt-12">
        <button 
          className='w-full py-3.5 rounded-xl text-base font-semibold text-primary-text-inv bg-primary-button shadow-md hover:bg-gray-800 transition-colors duration-200'
        >
          Get started
        </button>
      </div>
    </div>
  );
};

// --- CardEnterprise Component (Missing in original code)
const CardEnterprise = () => {
  const features = [
    'Get a fully designed Website.',
    'Webflow Development',
    'Limited Support',
    'Standard integrations',
    'Email support',
    'Email support',
    'Email support',
    'Email support',
  ];

  return (
    <div className='flex-1 w-full max-w-sm bg-background rounded-xl p-8 flex flex-col justify-between border border-gray-200 shadow-xl/30 hover:shadow-2xl transition-shadow duration-300'>
      <div className='flex flex-col items-center'>
        <h3 className='text-center text-3xl text-primary-text font-extrabold mb-4'>
          Enterprise
        </h3>
        <p className='text-center text-sm text-secondary-text px-2'>
          Get a professional website designed according to your needs.
        </p>

        {/* Price */}
        <div className='flex mt-10 items-end justify-center mb-8'>
          <h3 className='text-5xl text-primary-text font-bold'>$999</h3>
          <p className='text-secondary-text text-base'> /month</p>
        </div>

        {/* Features */}
        <FeatureList features={features} accentColor={COLORS.primary} />
      </div>

      {/* Button */}
      <div className="mt-12">
        <button 
          className='w-full py-3.5 rounded-xl text-base font-semibold text-white bg-primary shadow-md hover:bg-primary transition-colors duration-200'
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};


// --- Pricing Component (Main Layout)
const Pricing = () => {
  return (
    // Set a very light gray background for the overall section
    <div className='mt-24 py-24 w-full bg-surface min-h-screen font-sans'> 
      <div className='max-w-7xl mx-auto flex flex-col items-center px-4'>
        
        {/* Header Content */}
        <button className='bg-primary-text items-center px-4 py-1.5 flex gap-x-2 rounded-full text-sm font-medium text-primary border border-gray-300 shadow-sm'>
          <Tag size={16} className="text-primary" />
          Pricing
        </button>
        <h2 className='text-5xl leading-tight font-extrabold text-primary-text text-center mt-6'>
          Find the right plan
        </h2>
        <p className='text-lg text-center text-secondary-text max-w-3xl mt-4'>
          Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals.
        </p>
        
        {/* Card Layout */}
        <div className='mt-16 w-full flex flex-col lg:flex-row justify-center items-stretch gap-8 px-4'>
          <Card />
          <CardPro />
          <CardEnterprise />
        </div>
      </div>
    </div>
  );
};

export default Pricing;