import React from 'react'
import { Hours } from '../components/layout/businessHours'
import { Faq } from '../components/layout/faq'
import { Map } from '../components/layout/map'
export default function AdditionalInfo() {
    return (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12 font-one">Additional Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Faq />
            <Map />
          </div>
          
          <Hours />
        </div>
      )
    }