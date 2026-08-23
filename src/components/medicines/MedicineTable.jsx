import { useState } from "react";
import Button from "../ui/Button";

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
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleSort = (key) => {
    setSortConfig((current) => {
      if (current.key == key) {
        return {
          key,
          direction: current.direction == "asc" ? "desc" : "asc",
        };
      }
      return {
        key,
        direction: "asc",
      };
    });
  };
  const sortedMedicines = [...medicines].sort((a, b) => {
    if (!sortConfig.key) {
  return 0;
}
    const aValue = 
      a[sortConfig.key] ?? "";
    const bValue = 
      b[sortConfig.key] ?? "";
    const camparison=String(aValue).localeCompare(String(bValue))
    return sortConfig.direction=='asc'? camparison:-camparison
  });

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
              // <th key={item.key}>{item.label}</th>
              <th key={item.key} ><Button onClick={() => handleSort(item.key)}>
                {item.label}
                {/* Visual Indicator */}
                {sortConfig.key === item.key
                  ? sortConfig.direction === "asc"
                    ? " 🔼"
                    : " 🔽"
                  : ""}
              </Button>
              
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedMedicines.map((medicine) => (
            <tr key={medicine.id} style={{ background: " lightgray" }}>
              {columns.map((column) => (
                <td key={column.key}>{medicine[column.key]} </td>
              ))}
              {/* <td>{medicine.brandName}</td>
              <td>{medicine.genericName}</td>
              <td>{medicine.manufacturer}</td>
              <td>{medicine.purpose}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MedicineTable;
