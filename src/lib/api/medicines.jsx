export async function getMedicines(){
   const response=await fetch(
    "https://api.fda.gov/drug/label.json?limit=10"

   )
   const data=await response.json()
   return data
} 
