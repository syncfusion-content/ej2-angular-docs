export let stackedHeaderData: Object[] = [];

const customerName: string[] = ["VINET", "TOMSP", "HANAR", "VICTE", "SUPRD", "CHOPS", "RICSU", "WELLI", "HILAA", "ERNSH", "CENTC", "OTTIK", "QUEDE"];
const shipCities: string[] = ["Reims", "Münster", "Rio de Janeiro", "Lyon", "Charleroi", "Bern", "Genève", "Resende", "San Cristóbal", "Graz", "México D.F.", "Köln", "Rio de Janeiro"];
const shipCountries: string[] = ["France", "Germany", "Brazil", "Belgium", "Switzerland", "Austria", "Mexico", "Venezuela"];
const statusOptions: string[] = ["Delivered", "Delivered", "In-progress", "Delivered", "In-progress", "In-progress", "Delivered", "Delivered", "In-progress", "Delivered"];
const date: Date[] = [new Date(1704067200000), new Date(1706745600000), new Date(1730467200000), new Date(1727788800000), new Date(1725206400000), new Date(1722528000000), new Date(1719849600000),
    new Date(1717312000000), new Date(1714720000000), new Date(1712041600000), new Date(1709459200000), new Date(1706781000000), new Date(1704288000000)];
const freightValues: number[] = [10.5, 20.75, 30.0, 40.25, 50.6, 60.85, 70.9, 80.1, 90.45, 100.55];
const feedbackValues: number[] = [1, 2, 3, 4, 5];
for (let i = 1; i <= 830; i++) {
    stackedHeaderData.push({
        OrderID: 150000 + i,
        CustomerID: 1000 + i,
        CustomerName: customerName[i % customerName.length],
        OrderDate: date[i % date.length],
        ShippedDate: date[i % date.length],
        Freight: freightValues[i % freightValues.length],
        ShipName: customerName[i % customerName.length] + " Logistics",
        ShipAddress: "Address " + i,
        ShipCity: shipCities[i % shipCities.length],
        ShipRegion: null,
        ShipCountry: shipCountries[i % shipCountries.length],
        Year: 2025,
        Salary: Math.floor(Math.random() * 30000) + 25000,
        Feedback: statusOptions[i % statusOptions.length] === "In-progress" ? 0 : feedbackValues[i % feedbackValues.length],
        Status: statusOptions[i % statusOptions.length]
    });
}