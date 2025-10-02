import { ArrowRight } from 'lucide-react'
import React from 'react'
import Stats from '../components/stats'
import SecondaryNav from '../components/secondary-nav'
import Features from '../components/features'

const Main = () => {
  return (
    <div className='flex flex-col items-center gap-y-6'>
      <div className='bg-surface p-1 rounded-full text-primary-text border border-tertiary-text-light border-b-0 shadow-surface'>
        <div className='flex justify-between items-center gap-x-2'>
            <button className='px-3 py-1 rounded-xl bg-primary text-primary-text-inv text-xs font-semibold'>
                New
            </button>
            <p className='text-primary-text text-sm'>
                Introducing AI Automation
            </p>
            <ArrowRight color="var(--primary)" size={16} />
        </div>
      </div>
       <h2 className='text-primary-text w-xl 2xl:w-3xl text-5xl 2xl:text-7xl text-center font-bold leading-14'>
            The Finance Solutions For Your Business
       </h2>
       <p className='w-2xl 2xl:w-5xl text-md text-tertiary-text-light text-center leading-7'>
        Empower your finance team. The onestop plateform for all financial management of small and medium-sized business.
       </p>
       <div className='rounded-full bg-surface flex justify-between items-center'>
            <input className='ml-6 text-tertiary-text-light w-sm outline-none text-md' placeholder='Enter your email address' />
            <button className='bg-primary-button text-xs font-semibold text-primary-text-inv px-5 py-4 rounded-full'>
                Book Demo
            </button>
       </div>
       <Stats />
       <SecondaryNav />
       <Features />
    </div>
  )
}

export default Main
