import Heading from '@/components/ui/Heading'
import React from 'react'

function page() {
  return (
    <div className='overflow-hidden bg-red-500'>
      <Heading title='Explore Our Popular Destinantions ' arrows />
      <div>
        <div className="card">1</div>
        <div className="card">1</div>
        <div className="card">1</div>
        <div className="card">1</div>
      </div>
    </div>
  )
}

export default page
