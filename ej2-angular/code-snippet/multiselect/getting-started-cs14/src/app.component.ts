


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    // specifies the template string for the MultiSelect component
    template: `<ejs-multiselect id='multiselectelement' [dataSource]='vegetableData' [fields]='fields'[placeholder]='placeholder' [popupHeight]='height'></ejs-multiselect>`
})
export class AppComponent {
    constructor() {
    }
    //define the data with category
    public vegetableData: { [key: string]: Object }[] = [
        { vegetable: 'Cabbage', category: 'Leafy and Salad', id: 'item1' },
        { vegetable: 'Spinach', category: 'Leafy and Salad', id: 'item2' },
        { vegetable: 'Wheat grass', category: 'Leafy and Salad', id: 'item3' },
        { vegetable: 'Yarrow', category: 'Leafy and Salad', id: 'item4' },
        { vegetable: 'Pumpkins', category: 'Leafy and Salad', id: 'item5' },
        { vegetable: 'Chickpea', category: 'Beans', id: 'item6' },
        { vegetable: 'Green bean', category: 'Beans', id: 'item7' },
        { vegetable: 'Horse gram', category: 'Beans', id: 'item8' },
        { vegetable: 'Garlic', category: 'Bulb and Stem', id: 'item9' },
        { vegetable: 'Nopal', category: 'Bulb and Stem', id: 'item10' },
        { vegetable: 'Onion', category: 'Bulb and Stem', id: 'item11' }
    ];
    // map the groupBy field with category column
    public fields: Object = { groupBy: 'category', text: 'vegetable', value: 'id' };
    // Set the popup list height
    public height: string = '200px';
    // set the placeholder to the MultiSelect input
    public placeholder: string = 'Select vegetables';
}



