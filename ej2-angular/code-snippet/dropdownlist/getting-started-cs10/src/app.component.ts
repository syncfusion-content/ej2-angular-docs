

import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component with change event
    template: `<ejs-dropdownlist id='diacritics' [dataSource]='data' [allowFiltering]='true' [ignoreAccent]='true' placeholder='Select a value'
            filterBarPlaceholder='e.g: aero'>
        </ejs-dropdownlist>`
})
export class AppComponent {
    constructor() {
    }
    // create local data
    public data: string[] = [
        'Aeróbics',
        'Aeróbics en Agua',
        'Aerografía',
        'Aeromodelaje',
        'Águilas',
        'Ajedrez',
        'Ala Delta',
        'Álbumes de Música',
        'Alusivos',
        'Análisis de Escritura a Mano'];
}


