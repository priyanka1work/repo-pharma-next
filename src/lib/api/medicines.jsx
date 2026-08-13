export async function getMedicines(){
   const response=await fetch(
    "https://api.fda.gov/drug/label.json?limit=50"

   )
  //  if(!response.ok){
  //   throw new Error("Error")

  //  }
  if (!response.ok) {
    throw new Error("Failed to fetch medicines");
}
   const data=await response.json()
//    console.log(data)
  return data.results.map((medicine, index) => ({
        id: index + 1,
        brandName: medicine.openfda?.brand_name?.[0] ?? "Unknown",
        genericName: medicine.openfda?.generic_name?.[0] ?? "Unknown",
        manufacturer: medicine.openfda?.manufacturer_name?.[0] ?? "Unknown",
        purpose: medicine.purpose?.[0] ?? "Not available"
    }));
} 
