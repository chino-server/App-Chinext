import React from 'react'
import { lusitana } from '@/app/ui/font'
import { CardWrapper } from '@/app/ui/dashboard/cards'

const page = () => {
  return (
    <main>
        <h1 className= {`${lusitana.className} mb-4 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <CardWrapper/> 
        </div>

    </main>
  )
}

export default page