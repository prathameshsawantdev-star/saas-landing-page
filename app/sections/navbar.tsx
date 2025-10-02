import React from 'react'

const navLinks = [
    "Product",
    "Pages",
    "Integration",
    "Blog",
    "Pricing"
]

const Navbar = () => {
  return (
    <div className='fixed z-10 top-0 w-full py-3 bg-surface/70 backdrop-blur-lg'>
      <div className='max-w-6xl 2xl:max-w-8xl mx-auto flex items-center justify-between'>
        <h2 className='text-primary-text text-xl 2xl:text-3xl font-bold'>FinSaaS</h2>
        <nav className='flex items-center justify-between gap-x-8'>
            {navLinks.map((link, key) => (
                <a href='' className='px-3 hover:underline underline-offset-4 underline-primary-text text-primary-text text-md 2xl:text-lg' key={key}>
                  <span>{link}</span>   
                </a>
            ))}
        </nav>
        <button className='bg-secondary-button p-6 py-2 rounded-full text-primary-text border border-tertiary-text-light border-b-0 shadow-button-secondary'>
            Get Started
        </button>
      </div>
    </div>
  )
}

export default Navbar
