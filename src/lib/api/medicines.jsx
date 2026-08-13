export async function getMedicines({ search = "" } = {}) {
  let url = "https://api.fda.gov/drug/label.json?limit=30";
  const trimmedSearch = search.trim();
  if (trimmedSearch) {
    const query = `openfda.brand_name:*${trimmedSearch}*`;

    url += `&search=${encodeURIComponent(query)}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch medicines");
  }
  const data = await response.json();
  // console.log("data", data);
  return data.results.map((medicine, index) => ({
    id: index + 1,
    brandName: medicine.openfda?.brand_name?.[0] ?? "Unknown",
    genericName: medicine.openfda?.generic_name?.[0] ?? "Unknown",
    manufacturer: medicine.openfda?.manufacturer_name?.[0] ?? "Unknown",
    purpose: medicine.purpose?.[0] ?? "Not available",
  }));
}
