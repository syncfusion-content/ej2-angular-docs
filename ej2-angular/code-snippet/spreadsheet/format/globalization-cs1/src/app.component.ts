import { SpreadsheetAllModule } from '@syncfusion/ej2-angular-spreadsheet'
import { Component, ViewChild } from '@angular/core';
import { loadCldr, setCulture, setCurrencyCode, Fetch } from '@syncfusion/ej2-base';
import { SpreadsheetComponent, getFormatFromType, configureLocalizedFormat, FormatOption } from '@syncfusion/ej2-angular-spreadsheet';
import { ChangeEventArgs, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { data } from './datasource';

// Loading the culture-related files.
const loadCultureFiles: (locales: string[]) => void = (locales: string[]): void => {
    const files: string[] = ['ca-gregorian', 'numbers', 'timeZoneNames', 'currencies', 'numberingSystems'];
    locales.forEach((locale: string) => {
        for (const fileName of files) {
            const url: string = `./cldr-data/${fileName === 'numberingSystems' ? '' : `${locale}/`}${fileName}.json`;
            const fetch: Fetch = new Fetch(url, 'GET');
            fetch.onSuccess = (value: string) => loadCldr((value));
            fetch.send();
        }
    });
}
loadCultureFiles(['de', 'fr-CH', 'zh']);

const localeFormats: { [key: string]: FormatOption[] } = {
    'de': [{ id: 37, code: '#,##0;-#,##0' }, { id: 38, code: '#,##0;[Red]-#,##0' },
    { id: 39, code: '#,##0.00;-#,##0.00' }, { id: 40, code: '#,##0.00;[Red]-#,##0.00' }, { id: 5, code: '#,##0 "€";-#,##0 "€"' },
    { id: 6, code: '#,##0 "€";[Red]-#,##0 "€"' }, { id: 7, code: '#,##0.00 "€";-#,##0.00 "€"' },
    { id: 8, code: '#,##0.00 "€";[Red]-#,##0.00 "€"' }, { id: 41, code: '_-* #,##0_-;-* #,##0_-;_-* "-"_-;_-@_-' },
    { id: 42, code: '_-* #,##0 "€"_-;-* #,##0 "€"_-;_-* "-" "€"_-;_-@_-' },
    { id: 43, code: '_-* #,##0.00_-;-* #,##0.00_-;_-* "-"??_-;_-@_-' },
    { id: 44, code: '_-* #,##0.00 "€"_-;-* #,##0.00 "€"_-;_-* "-"?? "€"_-;_-@_-' },
    { id: 14, code: 'dd.MM.yyyy' }, { id: 15, code: 'dd. MMM yy' }, { id: 16, code: 'dd. MMM' }, { id: 17, code: 'MMM yy' },
    { id: 20, code: 'hh:mm' }, { id: 21, code: 'hh:mm:ss' }, { id: 22, code: 'dd.MM.yyyy hh:mm' }],
    'zh': [{ id: 37, code: '#,##0;-#,##0' }, { id: 38, code: '#,##0;[Red]-#,##0' }, { id: 39, code: '#,##0.00;-#,##0.00' },
    { id: 40, code: '#,##0.00;[Red]-#,##0.00' }, { id: 5, code: '"¥"#,##0;"¥"-#,##0' }, { id: 6, code: '"¥"#,##0;[Red]"¥"-#,##0' },
    { id: 7, code: '"¥"#,##0.00;"¥"-#,##0.00' }, { id: 8, code: '"¥"#,##0.00;[Red]"¥"-#,##0.00' },
    { id: 41, code: '_ * #,##0_ ;_ * -#,##0_ ;_ * "-"_ ;_ @_' }, { id: 42, code: '_ "¥"* #,##0_ ;_ "¥"* -#,##0_ ;_ "¥"* "-"_ ;_ @_' },
    { id: 43, code: '_ * #,##0.00_ ;_ * -#,##0.00_ ;_ * "-"??_ ;_ @_' },
    { id: 44, code: '_ "¥"* #,##0.00_ ;_ "¥"* -#,##0.00_ ;_ "¥"* "-"??_ ;_ @_' },
    { id: 14, code: 'yyyy/m/d' }, { id: 22, code: 'yyyy/m/d h:mm' }],
    'fr-CH': [{ id: 37, code: '#,##0;-#,##0' }, { id: 38, code: '#,##0;[Red]-#,##0' }, { id: 39, code: '#,##0.00;-#,##0.00' },
    { id: 40, code: '#,##0.00;[Red]-#,##0.00' }, { id: 5, code: '#,##0 "CHF";-#,##0 "CHF"' },
    { id: 6, code: '#,##0 "CHF";[Red]-#,##0 "CHF"' }, { id: 7, code: '#,##0.00 "CHF";-#,##0.00 "CHF"' },
    { id: 8, code: '#,##0.00 "CHF";[Red]-#,##0.00 "CHF"' }, { id: 14, code: 'dd.MM.yyyy' }, { id: 15, code: 'dd.MMM.yy' },
    { id: 16, code: 'dd.MMM' }, { id: 17, code: 'MMM.yy' }, { id: 20, code: 'HH:mm' }, { id: 21, code: 'HH:mm:ss' },
    { id: 22, code: 'dd.MM.yyyy HH:mm' }, { id: 42, code: '_-* #,##0 "CHF"_-;-* #,##0 "CHF"_-;_-* "-" "CHF"_-;_-@_-' },
    { id: 44, code: '_-* #,##0.00 "CHF"_-;-* #,##0.00 "CHF"_-;_-* "-"?? "CHF"_-;_-@_-' },
    { id: 41, code: '_-* #,##0_-;-* #,##0_-;_-* "-"_-;_-@_-' }, { id: 43, code: '_-* #,##0.00_-;-* #,##0.00_-;_-* "-"??_-;_-@_-' }
    ],
    'en-US': []
};

// Setting German culture.
setCulture('de');
// Setting currency code for the German culture.
setCurrencyCode('EUR');

@Component({
    imports: [
        SpreadsheetAllModule, DropDownListModule
    ],
    standalone: true,
    selector: 'app-container',
    template: `
    <ejs-dropdownlist id='ddlelement' #samples [index]='index' [width]='width' [dataSource]='cultureList' [fields]='fields' [popupHeight]='popupHeight' [placeholder]='placeholder' (change)="change($event)"></ejs-dropdownlist>
    <ejs-spreadsheet #spreadsheet locale='de' listSeparator=';' (created)='created()'>
                    <e-sheets>
                        <e-sheet>
                            <e-ranges>
                                <e-range [dataSource]='dataSource'></e-range>
                            </e-ranges>
                            <e-columns>
                                <e-column [width]=120></e-column>
                                <e-column [width]=180></e-column>
                                <e-column [width]=100></e-column>
                                <e-column [width]=120></e-column>
                                <e-column [width]=120></e-column>
                            </e-columns>
                        </e-sheet>
                    </e-sheets>
                </ejs-spreadsheet>`
})

export class AppComponent {
    @ViewChild('spreadsheet')
    public spreadsheetObj!: SpreadsheetComponent;
    public dataSource: Object[] = data;
    public index: number = 0;
    public popupHeight: string = '200px';
    public width: string = '150px';
    public placeholder: string = 'Select a Locale';
    public cultureList: { [key: string]: Object }[] = [
        { Culture: 'German - Germany', localeOption: 'de EUR ;' },
        { Culture: 'French - Switzerland', localeOption: 'fr-CH CHF ;' },
        { Culture: 'Chinese - China', localeOption: 'zh CNY ,' },
        { Culture: 'English', localeOption: 'en-US USD ,' }
    ];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Culture', value: 'localeOption' };

    created(): void {
        this.spreadsheetObj.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'A1:H1');
        // Mapping default number formats for the German ('de') locale after the spreadsheet is created in the created event.
        configureLocalizedFormat(this.spreadsheetObj, localeFormats['de']);
        // You need to invoke a refresh if the formats are configured after the spreadsheet component has been created.
        setTimeout(()=>{
            this.spreadsheetObj.refresh();
        });
        this.applyFormats(); 
    }

    change(args: ChangeEventArgs): void {
        const localeOption: string[] = (args.value as string).split(' ');
        // Setting the culture name like 'de', 'fr-CH', 'zh', and 'en-US'.
        const cultureName: string = localeOption[0];
        setCulture(cultureName);
        // Setting the currency code for the selected locale like 'EUR', 'CNY', 'CHF', and 'USD'.
        setCurrencyCode(localeOption[1]);
        // Mapping the default number format codes for the selected locale.
        configureLocalizedFormat(this.spreadsheetObj, localeFormats[cultureName]);
        // Setting the culture for the spreadsheet.
        this.spreadsheetObj.locale = cultureName;
        // Setting the list separator for the selected locale.
        this.spreadsheetObj.listSeparator = localeOption[2];
        // Refreshing the changes immediately in the spreadsheet.
        this.spreadsheetObj.dataBind();
        this.applyFormats();
    }

    applyFormats(): void {
        // Apply format to the specified range in the active sheet.
        // The getFormatFromType method returns the culture-based format code based on the mapped formats.
        // If a format ID is not mapped or is not applicable, it will return the format code based on the loaded culture.
        // For 'en-US' (English) culture, the format code will be 'm/d/yyyy'.
        // For 'de' (German) culture, the format code will be 'dd.MM.yyyy'.
        // For 'fr-CH' (French-Switzerland) culture, the format code will be 'dd.MM.yyyy'.
        // For 'zh' (Chinese) culture, the format code will be 'yyyy/m/d'.
        this.spreadsheetObj.numberFormat(getFormatFromType('ShortDate'), 'B2:B11');
        // For 'en-US' (English) culture, the format code will be 'h:mm:ss AM/PM'.
        // For 'de' (German) culture, the format code will be 'HH:mm:ss'.
        // For 'fr-CH' (French-Switzerland) culture, the format code will be 'HH:mm:ss'.
        // For 'zh' (Chinese) culture, the format code will be 'h:mm:ss AM/PM'.
        this.spreadsheetObj.numberFormat(getFormatFromType('Time'), 'C2:C11');
        // For 'en-US' (English) culture, the format code will be '$#,##0.00'.
        // For 'de' (German) culture, the format code will be '#,##0.00 "€"'.
        // For 'fr-CH' (French-Switzerland) culture, the format code will be '#,##0.00 "CHF"'.
        // For 'zh' (Chinese) culture, the format code will be '"¥"#,##0.00'.
        this.spreadsheetObj.numberFormat(getFormatFromType('Currency'), 'E2:F11');
        // For 'en-US' (English) culture, the format code will be '_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'.
        // For 'de' (German) culture, the format code will be '_-* #,##0.00 "€"_-;-* #,##0.00 "€"_-;_-* "-"?? "€"_-;_-@_-'.
        // For 'fr-CH' (French-Switzerland) culture, the format code will be '_-* #,##0.00 "CHF"_-;-* #,##0.00 "CHF"_-;_-* "-"?? "CHF"_-;_-@_-'
        // For 'zh' (Chinese) culture, the format code will be '_ "¥"* #,##0.00_ ;_ "¥"* -#,##0.00_ ;_ "¥"* "-"??_ ;_ @_'
        this.spreadsheetObj.numberFormat(getFormatFromType('Accounting'), 'H2:H11');
        // The percentage format code will be '0.00%' for all the cultures.
        this.spreadsheetObj.numberFormat('0.00%', 'G2:G11');
    }
};