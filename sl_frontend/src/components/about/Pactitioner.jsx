import React from 'react'
import InfoCard from '../methods/InfoCard'
const Pactitioner = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-slate-800 mb-12">Our Member</h2>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
          </div>
        </div>
      </section>
  )
}

export default Pactitioner
      