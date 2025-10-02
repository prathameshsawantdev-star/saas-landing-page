import React from 'react'


const links = [
    "Demo",
    "Integration",
    "Product",
    "Pricing",
    "Login"
]

const SecondaryNav = () => {
  return (
    <div className='w-full relative flex justify-center bg-transparent text-clip'>
      <div className='w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-from)_0%,var(--tw-gradient-to)_100%)] from-primary/70 transparent blur-[100px] absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 -z-10' />
      <div className='mt-6 flex items-center p-1 rounded-full bg-white/30 backdrop-blur-2xl'>
        {links.map((link, key) => (
            <a key={key} className={`px-4 py-1.5 rounded-full text-sm text-primary-text ${key === 0 ? 'bg-primary-button text-primary-text-inv' : ''}`}>
                {link}
            </a>
        ))}
      </div>  
    </div>
  )
}

export default SecondaryNav
