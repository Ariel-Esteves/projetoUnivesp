'use client'
import React from 'react'
import {Delete, PlusCircle, Save} from 'lucide-react'
import Link from 'next/link'
import {usePathname, useSearchParams} from 'next/navigation'
const ButtonHeader = () => {

  const pathname = usePathname()
  const paramField = useSearchParams().get('field');

  
  return (
    <div className='flex flex-col bg-slate-800 border-2 border-black'>
      <div className='flex justify-around p-2 '>
        <div className='flex-col justify-center gap-2 bg-slate-500 p-1 rounded-md hover:bg-slate-600'>
          <span>
            NEW 
          </span>
          <PlusCircle className='m-auto'/>
        </div>
        <div className='flex-col justify-center gap-2 bg-slate-500 p-1 rounded-md hover:bg-slate-600'>
          <span>
            SAVE
          </span>
          <Save className='m-auto'/>
        </div>
        <div className='flex-col justify-center gap-2 bg-slate-500 p-1 rounded-md hover:bg-slate-600'>
          <span>
            DELETE
          </span>
          <Delete className='m-auto'/>
        </div>
      </div>
        
        <div className='flex justify-around'>
          <Link href={'?field=icms'} className=' border-black border-2 w-full text-center hover:border-white' >icms</Link>
          <Link href={'?field=ipi'} className=' border-black border-2 w-full text-center hover:border-white'>ipi</Link>
          <Link href={'?field=pis'} className=' border-black border-2 w-full text-center hover:border-white'>pis</Link>
          <Link href={'?field=cofins'} className=' border-black border-2 w-full text-center hover:border-white'>cofins</Link>
        </div>
        {console.log(paramField)}
    </div>
  )
}

export default ButtonHeader