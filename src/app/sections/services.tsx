import React from 'react'
import ServicesGrid from '../components/layout/servicesGrid'

export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 mb-20">
      <h1 className="text-3xl font-bold mb-10">Services That We Offer</h1>
      <ServicesGrid />
    </div>
  )
}
