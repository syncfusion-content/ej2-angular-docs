import { Component } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';

// Defines the data to be displayed in the Grid.
const data: object[] = [
    { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
    { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
    { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 },
    { OrderID: 10251, CustomerName: 'Elizabeth Lincoln', OrderDate: new Date(2025, 1, 18), ShipCountry: 'France', Freight: 41.34 },
    { OrderID: 10252, CustomerName: 'Victoria Ashworth', OrderDate: new Date(2025, 2, 10), ShipCountry: 'Belgium', Freight: 51.30 },
    { OrderID: 10253, CustomerName: 'Martine Rance', OrderDate: new Date(2025, 2, 22), ShipCountry: 'Brazil', Freight: 58.17 }
]

@Component({
    imports: [GridModule],
    standalone: true,
    selector: 'app-root',
    template: `
        <!-- Assigns the dataset to the Grid component -->
        <ejs-grid [dataSource]='data'>
            <!-- Define the columns to be displayed -->
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerName' headerText='Customer Name' width=100></e-column>
                <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width=100></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=120></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=100></e-column>
            </e-columns>
        </ejs-grid>
    `
})

export class App {
    public data: object[] = data;
}