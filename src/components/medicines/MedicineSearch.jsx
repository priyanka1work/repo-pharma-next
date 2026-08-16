"use client";

import { useEffect, useRef, useState } from "react";
import MedicineTable from "./MedicineTable";
import EmptyState from "../common/EmptyState";
import LoadingState from "../common/LoadingState";
import ErrorState from "../common/ErrorState";

function MedicineSearch({ initialMedicines }) {
  const [search, setSearch] = useState("");

  // const filteredData=medicines.filter((medicine)=>{
  //     const searchTerm = search.toLowerCase();
  //     return medicine.brandName.toLowerCase().includes(searchTerm)

  // })
  // console.log("search",filteredData)
  const [medicines, setMedicines] = useState(initialMedicines);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const controller=new AbortController()
  const controllerRef = useRef(null);
  async function handleSearch(value) {
    controllerRef.current?.abort()
    const controller=new AbortController()
    controllerRef.current=controller
   
    setLoading(true);
    try {
      const response = await fetch(
        `/api/medicines?search=${encodeURIComponent(value)}`,{
          signal:controller.signal
        }
      );

      if (!response.ok) {
        throw new Error("Failed to search medicines");
      }
     

      const data = await response.json();

      setMedicines(data.medicines);

      console.log("search", "filteredData", medicines);
    } catch (error) {
      if (error.name === "AbortError") {
        return;
      }
      setError("Unable to search medicines.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(()=>{
    if(!search.trim()){
      setMedicines(initialMedicines)
      setLoading(false)
      setError('')
      return
    }
    const timer=setTimeout(()=>{
      handleSearch(search)
    },500)
    return ()=>{clearTimeout(timer)
      controllerRef.current.abort()
    }

  },[search])

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search medicine..."
      />
      {loading && <LoadingState message="Loading .... have patience"/>}

      {error && <ErrorState message={error}/>}
      {!loading && !error && medicines.length==0 && (
        <EmptyState message="No medicines Found"/>
      )}

      {!loading && !error && <MedicineTable medicines={medicines} />}
    </div>
  );
}

export default MedicineSearch;
