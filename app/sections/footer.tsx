import { Facebook, Github, Instagram, Twitter, X } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-footer mt-20 pt-20 pb-16'>
      <div className='flex flex-col items-center mx-auto'>
        <div className='flex justify-between w-6xl 2xl:max-w-8xl'>
            <div className='flex flex-col gap-y-4'>
                <h3 className='text-xl font-bold text-primary mb-4'>FinSaaS</h3>
                <p className='text-sm text-tertiary-text-light max-w-xs'>
                    Data analysis software is a type of software tool used for data analysis and reporting.
                </p>
                <div className='flex gap-x-2'>
                    <div className='p-2.5 rounded-full bg-secondary-button'>
                        <Twitter size={20} color='var(--primary-button)' fill='var(--primary-button)' />
                    </div>
                     <div className='w-10 h-10 rounded-full bg-blue-600 text-lg text-white flex items-center justify-center'>
                        f
                    </div>
                     <div className='p-2.5 rounded-full bg-secondary-button'>
                        <Instagram size={20} color='var(--primary-text)' />
                    </div>
                     <div className='p-2.5 rounded-full bg-secondary-button'>
                        <Github size={20} color='black' fill='var(--primary-text)' />
                    </div>
                </div>
            </div>
             <div className='flex flex-col gap-y-6'>
                        <h3 className='text-xl text-primary-text font-semibold mb-2'>Company</h3>
                        <p className='text-sm text-tertiary-text-light'>Service</p>
                        <p className='text-sm text-tertiary-text-light'>Resources</p>
                        <p className='text-sm text-tertiary-text-light'>About Us</p>
                    </div>

            <div className='flex flex-col gap-y-6'>
                        <h3 className='text-xl text-primary-text font-semibold mb-2'>Help</h3>
                        <p className='text-sm text-tertiary-text-light'>Customer Support</p>
                        <p className='text-sm text-tertiary-text-light'>Terms & Conditions</p>
                        <p className='text-sm text-tertiary-text-light'>Privacy Policy</p>
                    </div>

            <div className='flex flex-col gap-y-8'>
                <h3 className='text-xl text-primary-text font-bold
                '>Subscribe to newsletter</h3>
                <div className='flex items-center w-[400px] 2xl:w-[440px] bg-surface rounded-lg overflow-clip'>
                    <input className='px-2 pl-4 flex-1 text-lg text-tertiary-text placeholder:text-tertiary-text-light outline-none' placeholder='Enter your email' />
                    <button className='w-[30%] py-3 text-sm bg-primary text-primary-text-inv'>
                        Join
                    </button>
                </div>
            </div>
        </div>




      </div>
    </div>
  )
}

export default Footer
