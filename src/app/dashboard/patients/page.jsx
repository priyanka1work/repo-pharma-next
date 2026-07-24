import PatientsTable from "@/components/patients/PatientsTable";


function page() {
  const patient = [
    {
      id: 1,
      name: "John",
      age: 30,
      disease: "Fever",
    },
    {
      id: 2,
      name: "Alice",
      age: 25,
      disease: "Asthma",
    },
    {
      id: 3,
      name: "David",
      age: 40,
      disease: "Diabetes",
    },
  ];
  return (
    <div>
      
            <PatientsTable patients={patient}/>
     
  
    </div>
  )
}

export default page
