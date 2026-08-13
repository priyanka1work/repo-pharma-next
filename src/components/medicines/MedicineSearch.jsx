"use client";

import { useState } from "react";
import MedicineTable from "./MedicineTable";

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
  async function handleSearch(value) {
    setSearch(value);
    setLoading(true);
    try {
      const response = await fetch(
        `/api/medicines?search=${encodeURIComponent(value)}`
      );

      if (!response.ok) {
        throw new Error("Failed to search medicines");
      }

      const data = await response.json();

      setMedicines(data.medicines);

      console.log("search", "filteredData", medicines);
    } catch (error) {
      setError("Unable to search medicines.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search medicine..."
      />
      {loading && <p>Searching...</p>}

      {error && <p>{error}</p>}

      {!loading && !error && <MedicineTable medicines={medicines} />}
    </div>
  );
}

export default MedicineSearch;
