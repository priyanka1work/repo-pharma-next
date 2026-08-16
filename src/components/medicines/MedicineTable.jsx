const columns = [
  {
    key: "brandName",
    label: "Brand Name",
  },
  {
    key: "genericName",
    label: "Generic Name",
  },
  {
    key: "manufacturer",
    label: "Manufacturer",
  },
  {
    key: "purpose",
    label: "Purpose",
  },
];
function MedicineTable({ medicines }) {
  if (medicines.length === 0) {
    return <p>No medicines found.</p>;
  }
  return (
    <div>
      Medicines
      <table>
        <thead>
          <tr>
            {columns.map((item, key) => (
              <th key={item.key}>{item.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {medicines.map((medicine) => (
            <tr key={medicine.id} style={{ background: " lightgray" }}>
              <td>{medicine.brandName}</td>
              <td>{medicine.genericName}</td>
              <td>{medicine.manufacturer}</td>
              <td>{medicine.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineTable;
