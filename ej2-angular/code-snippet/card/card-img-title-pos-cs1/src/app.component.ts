

import { Component, ViewChild } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-container',
    template: `
            <div>
            <div class="e-card">
                <div class="e-card-image">
                    <div class="e-card-title">Node.js</div>
                </div>
                <div class="e-card-content">
                    Node.js is a wildly popular platform for writing web applications that has revolutionized web development in many ways, enjoying
                    support across the open source community as well as industry.
                </div>
        </div>
    </div>
    <div style="Margin: 5px 0;width:300px">
        <select id="title_position">
            <option value="bottom-left">BottomLeft</option>
            <option value="top-left">TopLeft</option>
            <option value="top-right">TopRight</option>
            <option value="bottom-right">BottomRight</option>
        </select>
    </div>        `
})

export class AppComponent {
    @ViewChild('element') element: any;

ngAfterViewInit () {
    // initialize DropDownList component
    let dropDownListObject: DropDownList = new DropDownList({
        placeholder:"Select Position",
        change: this.changed,
    });

    // render initialized DropDownList
    dropDownListObject.appendTo('#title_position');
    }
    public changed(e: any) {
        let cardEle = document.querySelector('.e-card');
        let titleEle = cardEle?.querySelector('.e-card-image .e-card-title');
        titleEle!.className = ''
        titleEle?.classList.add('e-card-title');
        titleEle?.classList.add('e-card-'+e.value);
    }

}


