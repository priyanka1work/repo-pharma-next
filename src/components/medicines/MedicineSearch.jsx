"use client"

import { useState } from "react"
import MedicineTable from "./MedicineTable"

function MedicineSearch({medicines}) {
    const [search,setSearch]=useState('')
    const filteredData=medicines.filter((medicine)=>{
        const searchTerm = search.toLowerCase();
        return medicine.brandName.toLowerCase().includes(searchTerm)

    })
    console.log("search",filteredData)

  return (
    <div>
      <input
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder="Search medicine..."
      />
      <MedicineTable medicines={filteredData}/>
    </div>
  )
}

export default MedicineSearch
