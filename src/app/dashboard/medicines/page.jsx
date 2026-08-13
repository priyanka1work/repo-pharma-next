import MedicineSearch from "@/components/medicines/MedicineSearch";
import MedicineTable from "@/components/medicines/MedicineTable";
import { getMedicines } from "@/lib/api/medicines";
import React from "react";

async function page() {
  const medicines = await getMedicines();
  // console.log(medicines);
  return (
    <MedicineSearch medicines={medicines}/>
  );
}

export default page;
