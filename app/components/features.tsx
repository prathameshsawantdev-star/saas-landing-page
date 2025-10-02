import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import Image from 'next/image';
import { EllipsisVertical } from 'lucide-react';

const Features = () => {
  const isDarkMode = useDarkMode();

  return (
    <div className='w-full mt-18 flex justify-center'>
      <div className='max-w-[1100px] grid grid-cols-4 grid-rows-2 gap-6'>
        <div className='col-span-1 row-span-1 bg-surface p-6 rounded-lg flex flex-col justify-end gap-y-6'>
          <p className='text-tertiary font-lighter text-xs 2xl:text-sm text-center'>
            Make informed decisions backed by 
data through our analytics tools. 
          </p>
          <Image src={!isDarkMode ? "/images/bull_graph.png" : "/images/bull_graph_dark.png"}  width={298} height={264} alt='' />
        </div>
        <div className='col-span-2 row-span-1 bg-surface p-6 rounded-lg flex flex-col justify-end gap-y-6'>
          <p className='text-tertiary font-lighter text-xs 2xl:text-sm text-center'>
           Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you. 
          </p>
          <div className='mx-auto'>
            <Image className='w-fit' src={!isDarkMode ? "/images/multi_graph.png" : "/images/multi_graph_dark.png"}  width={660} height={304} alt='' />
          </div>  
        </div>
        <div className='col-span-1 row-span-1 bg-surface p-6 rounded-lg flex flex-col justify-end gap-y-6'>
          <p className='text-tertiary font-lighter text-xs 2xl:text-sm text-center'>
            Seamlessly collaborate with your team 
members like never before. 
          </p>
          <Image src={!isDarkMode ? "/images/team.png" : "/images/team_dark.png"}  width={298} height={264} alt='' />
        </div>

        <div className='col-span-2 row-span-1 bg-surface p-6 rounded-lg flex flex-col justify-end gap-y-6'>
          <p className='text-tertiary-text-light leading-7 font-lighter text-sm 2xl:text-md text-center'>
            Take the pain out of book keeping! Wave goodbye to mountains of paperwork and endless email reminders. There`s now a new way of accounting.
          </p>
          <div className='flex justify-between gap-x-6'>
            <div className='mt-20 p-4 bg-background flex flex-col gap-y-4 rounded-lg w-[40%] -mb-28'>
              <h2 className='text-primary-text text-2xl font-bold'>$3453.00</h2>
              <div className='w-[120%] h-[1px] rounded-lg bg-tertiary-text-light' />
              <div className='w-full flex flex-col mt-2 gap-y-3 items-stretch'>
                <div className='bg-[#ccc] h-1 rounded-lg' />
                 <div className='bg-[#ccc] h-1 rounded-lg' />
                  <div className='bg-[#ccc] h-1 rounded-lg' />
              </div>
            </div>

            <div className='p-4 bg-background flex-1 rounded-lg flex flex-col gap-y-6'>
              <h4>
                MonthlyInvoice
              </h4>
              <div className='flex items-start justify-between w-full gap-x-2'>
                <div className='bg-gray-500 w-8 h-8 rounded-full' />
                <div className='flex flex-col items-start gap-y-2'>
                  <p className='text-xs text-tertiary-text-light 2xl:text-md'>John Client_download.Pdf</p>
                  <div className='h-1 w-full rounded-lg bg-tertiary-text-light' />
                </div>
                <EllipsisVertical size={16} color='var(--tertiary-text-light)' />
              </div>
              
              <div className='flex items-start justify-between w-full gap-x-2'>
                <div className='bg-gray-500 w-8 h-8 rounded-full' />
                <div className='flex flex-col items-start gap-y-2'>
                  <p className='text-xs text-tertiary-text-light 2xl:text-md'>John Client_download.Pdf</p>
                  <div className='h-1 w-full rounded-lg bg-tertiary-text-light' />
                </div>
                <EllipsisVertical size={16} color='var(--tertiary-text-light)' />
              </div>
              <div className='flex items-start justify-between w-full gap-x-2'>
                <div className='bg-gray-500 w-8 h-8 rounded-full' />
                <div className='flex flex-col items-start gap-y-2'>
                  <p className='text-xs text-tertiary-text-light 2xl:text-md'>John Client_download.Pdf</p>
                  <div className='h-1 w-full rounded-lg bg-tertiary-text-light' />
                </div>
                <EllipsisVertical size={16} color='var(--tertiary-text-light)' />
              </div>
            </div>
          </div>
        </div>
        
        <div className='col-span-2 row-span-1 bg-surface p-8 rounded-lg flex flex-col justify-end items-start gap-y-6'>
          <h3 className='text-primary-text text-3xl 2xl:text-4xl font-bold leading-9 w-3/4'>
            Optimise expense Management as a team
          </h3>
          <p className='text-md text-tertiary-text-light'>
            Bring harmony to team expenses with budget limits and real-time monitiring. 
            Freedom for your staff. Peace of mind for you.
          </p>
          <button className='mt-8 px-7 py-2 bg-primary-button text-primary-text-inv rounded-full'>
            Explore more 
          </button>
        </div>
      </div>  
    </div>
  )
}

export default Features

//src={`/images/bull_graph${isDarkMode && "_dark"}.png`}