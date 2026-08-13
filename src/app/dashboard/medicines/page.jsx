import MedicineSearch from "@/components/medicines/MedicineSearch";
// import MedicineTable from "@/components/medicines/MedicineTable";
import { getMedicines } from "@/lib/api/medicines";

async function Page() {
  const medicines = await getMedicines();
  // console.log(medicines);
  return <MedicineSearch initialMedicines={medicines} />;
}

export default Page;
