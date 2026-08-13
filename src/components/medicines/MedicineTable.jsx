

function MedicineTable({medicines}) {
  if (medicines.length === 0) {
    return (
        <p>
            No medicines found.
        </p>
    );
}
  return (
    
    <div>
    Medicines
    
      <table >
        <thead>
          <tr>
          <th>brandName</th>
          <th>genericName</th>
          <th>manufacturer</th>
          <th>purpose</th>
          </tr>
        </thead>
        <tbody>
        {medicines.map((medicine) => (
          <tr>
          <td>{medicine.brandName}</td>
          <td>{medicine.genericName}</td>
          <td>{medicine.manufacturer}</td>
          <td>{medicine.purpose}</td>
          </tr>  ))}
        </tbody>
  
        

        
      </table>
  
  </div>
  )
}

export default MedicineTable
