import { getMedicines } from '@/lib/api/medicines'
import React from 'react'

async function page() {
    const medicines= await getMedicines()
    console.log(medicines)
  return (
    <div>
      {/* {medicines} */}
    </div>
  )
}

export default page
