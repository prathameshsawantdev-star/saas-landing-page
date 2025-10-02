import Image from 'next/image'
import React from 'react'

const CTA = () => {
  return (
    <div className='mt-18 bg-background w-full flex justify-center items-center'>
        <div className='max-w-7xl 2xl:max-w-9xl mx-auto bg-surface flex justify-between p-2 rounded-3xl'>
            <div className='flex flex-col justify-center px-18 py-18'>
                <h2 className='text-5xl 2xl:text-7xl font-bold text-primary-text leading-20'>
                    Let’s Upgrade your
finances experience
by using FinBiz
                </h2>
                <div className='flex items-center gap-x-6 mt-8'>
                    <button className='px-8 py-3 rounded-full text-lg font-semibold bg-primary text-primary-text-inv'>
                        Request Demo
                    </button>
                    <button className='px-8 py-3 rounded-full text-lg font-semibold bg-primary-button text-primary-text-inv'>
                        Watch Video
                    </button>
                </div>
            </div>
            <Image alt='' src='/images/cta_png.png' width={589} height={562} className='w-lg h-lg' /> 
        </div>
    </div>
  )
}

export default CTA
