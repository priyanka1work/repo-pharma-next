function PatientsTable({ patients}) {
  
  return (
    <table>

    <thead>

      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Disease</th>
      </tr>

    </thead>

    <tbody>

      {
        patients.map((patient) => (

          <tr key={patient.id}>

            <td>{patient.name}</td>

            <td>{patient.age}</td>

            <td>{patient.disease}</td>

          </tr>

        ))
      }

    </tbody>

  </table>
  );
}

export default PatientsTable;
