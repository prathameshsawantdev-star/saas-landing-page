import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle, MessageSquareMore, Star } from 'lucide-react'
import React from 'react'

const Card = () => {
    return(
        <div className='px-6 py-5 bg-surface min-w-[350px] rounded-lg'>
            <p className='text-secondary-text'>
                I really like the system at this management,
i love recommending this software to you
guys
            </p>
            <div className='flex items-center gap-x-4 mt-6'>
                <div className='w-8 h-8 rounded-full bg-tertiary-text-light' />
                <div className='flex items-end h-full gap-x-[1px]'>
                    <Star size={14} color='#FFC250' fill='#FFC250' />
                    <Star size={14} color='#FFC250' fill='#FFC250' />
                    <Star size={14} color='#FFC250' fill='#FFC250' />
                    <Star size={14} color='#FFC250' fill='#FFC250' />
                    <Star size={14} color='#FFC250' fill='#FFC250' />
                </div>
            </div>
            
        </div>
    )
}

const Testimonial = () => {
  return (
    <div className='mt-32 flex flex-col items-center justify-between gap-y-12'>
      <div className='flex flex-col items-center gap-y-6'>
        <button className='bg-secondary-button items-center px-4 py-1.5 flex gap-x-2 rounded-full text-sm text-primary-text border border-tertiary-text-light border-b-0 shadow-button-secondary'>
            <MessageSquareMore size={16} color='var(--color-primary)' />
            Testimonials
        </button>
        <h2 className='text-4xl font-semibold text-center'>What Our Clients Say</h2>
        <p className='text-xs text-tertiary-text-light text-center max-w-2xl'>
                "Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/services offered]. Read what our clients have to say about their experience with us.
        </p>
      </div>

      <div className='flex items-center gap-x-8 max-w-6xl overflow-x-scroll'>
        <Card />
        <Card />
        <Card />
         <Card />
        <Card />
        <Card />
      </div>  

      <div className='mt-6 mx-auto flex gap-x-4 items-center'>
        <div className='p-2 rounded-full bg-white text-primary-text-inv'>
            <ArrowLeft size={24} color='black' />
        </div>
        <div className='p-2 rounded-full bg-primary text-primary-text-inv'>
            <ArrowRight size={24} color='white' />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
