

import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { Component, OnInit } from '@angular/core';
import { data } from './datasource';

L10n.load({
    'de-DE': {
        grid: {
            EmptyRecord: 'Keine Aufzeichnungen angezeigt',
            GroupDropArea: 'Ziehen Sie einen Spaltenkopf hier, um die Gruppe ihre Spalte',
            UnGroup: 'Klicken Sie hier, um die Gruppierung aufheben',
EmptyDataSourceError: 'DataSource darf bei der Erstauslastung nicht leer sein, da Spalten aus der dataSource im AutoGenerate Spaltenraster',
            Item: 'Artikel',
            Items: 'Artikel'
        },
        pager: {
            currentPageInfo: '{0} von {1} Seiten',
            totalItemsInfo: '({0} Beiträge)',
            firstPageTooltip: 'Zur ersten Seite',
            lastPageTooltip: 'Zur letzten Seite',
            nextPageTooltip: 'Zur nächsten Seite',
            previousPageTooltip: 'Zurück zur letzten Seit',
            nextPagerTooltip: 'Gehen Sie zu den nächsten Pager-Elementen',
            previousPagerTooltip: 'Gehen Sie zu vorherigen Pager-Elementen'
        }
    }
});

@Component({
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' [locale]='locale' height='315px'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='Freight' headerText='Freight' [format]='formatOptions' textAlign='Right' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
               </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public formatOptions?: object;
    public locale?: any = 'de-DE';

    ngOnInit(): void {
        setCulture('de-DE');
        setCurrencyCode('EUR');

        loadCldr('./currencies.json',
            './numbers.json',
            './ca-gregorian.json',
            './timeZoneNames.json',
            './numberingSystems.json');

        this.data = data;
        this.formatOptions = { format: 'C2', useGrouping: false, minimumSignificantDigits: 1, maximumSignificantDigits: 3, currency: 'EUR' }
    }
}



