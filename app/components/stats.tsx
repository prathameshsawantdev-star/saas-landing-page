import Image from 'next/image';
import React from 'react'
import useDarkMode from '../hooks/useDarkMode';



const Card = ({title, updown, amount, variant}:{
    title: string, 
    updown:string,
    amount: string ,
    variant: "Profit" | "Loss" | "Trust"
}) => {
    let updownText;
    if (variant == 'Loss'){
        updownText = `-${updown}`
    } else {
        updownText = `+${updown}`
    }

    let graphColor;
    switch(variant){
        case "Profit":
            graphColor = "text-success"
            break;
        case "Loss":
            graphColor = "text-danger"
            break;
        case "Trust":
            graphColor = "text-trust"
            break;
    }
    return(
        <div className='bg-surface px-6 py-4 col-span-2 grid-rows-1 rounded-lg flex flex-col justify-between'>
            <div className='flex justify-between'>
                <p className='text-sm text-tertiary-text-light'>{title}</p>
                <span className={`${graphColor} text-xs`}>{updownText}</span>
            </div>
            <div className='flex justify-between mt-6 min-w-lg'>
                <h3 className='text-primary-text text-4xl'>
                    ${amount}
                </h3>
            </div>
        </div>
    )
}

const graphData: {
    title: string, 
    updown:string,
    amount: string ,
    variant: "Profit" | "Loss" | "Trust"
}[] = [
    {
        title: "Total Profit",
        updown: "18.23",
        amount: "350.240",
        variant: "Profit"
    },
    {
        title: "Total revenue",
        updown: "28.35",
        amount: "400.690",
        variant: "Loss"
    },
    {
        title: "Product sold",
        updown: "28.35",
        amount: "200.000",
        variant: "Trust"
    }
]

const Stats = () => {
    const isDarkMode = useDarkMode();
    return (
    <div className='w-full mt-24 flex items-center justify-center'>
      <div className='grid max-w-[1100px] grid-cols-6 grid-rows-3 p-8 rounded-lg bg-background gap-3'>
        {graphData.map((data, key) => (
            <Card {...data} key={key} />
        ))}
        
        <div className='row-span-2 col-span-1 px-4 py-3 bg-surface flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm text-tertiary-text'>Total Balance</p>
                <h3 className='text-2xl text-primary-text'>$350.0</h3>
            </div>
            <button className='bg-primary-button text-primary-text-inv w-full rounded-md py-1.5 text-sm'>
                Transfer
            </button>
            <div className='h-[1px] bg-[#ddd]' />

            <div className='flex flex-col gap-y-2'>
                <p className='text-sm text-tertiary-text'>Total Income</p>
                <h3 className='text-2xl text-primary-text'>$320.0</h3>
            </div>
            <div className='flex flex-col gap-y-2'>
                <p className='text-sm text-tertiary-text'>Total Expense</p>
                <h3 className='text-2xl text-primary-text'>$220.0</h3>
            </div>
        </div>

        <Image src={isDarkMode ? '/images/stats_graph_dark.png' : '/images/stats_graph.png'} width={900} height={470} alt='' className='col-span-4 max-w-full w-fit row-span-2' />
        <div className='flex flex-col col-span-1 row-span-2 gap-y-6 py-3 w-full px-6 justify-between bg-surface'>
            <div className='flex flex-col items-start gap-y-2'>
                <h3 className='text-sm text-tertiary-text-light'>Emplyoees</h3>
                <div className='w-1/2 h-2 bg-tertiary-text-light rounded-lg' />
                 <div className='w-full h-2 bg-[#bbb] rounded-lg' />
            </div>
            <div className='flex flex-col items-start gap-y-2'>
                <h3 className='text-sm text-tertiary-text-light'>Independent Contractor</h3>
                <div className='w-1/2 h-2 bg-tertiary-text-light rounded-lg' />
                 <div className='w-full h-2 bg-[#bbb] rounded-lg' />
            </div>
            <div className='flex flex-col items-start gap-y-2'>
                <h3 className='text-sm text-tertiary-text-light'>Contracted Employee</h3>
                <div className='w-1/2 h-2 bg-tertiary-text-light rounded-lg' />
                 <div className='w-full h-2 bg-[#bbb] rounded-lg' />
            </div>
            <div className='flex flex-col items-start gap-y-2'>
                <h3 className='text-sm text-tertiary-text-light'>Stakeholders</h3>
                <div className='w-1/2 h-2 bg-tertiary-text-light rounded-lg' />
                 <div className='w-full h-2 bg-[#bbb] rounded-lg' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
