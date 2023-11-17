

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<!-- To Render Breadcrumb with items. -->
        <div id="breadcrumb-control">
            <div class="header"><b>EnableNavigation - false</b></div><br />
            <ejs-breadcrumb [enableNavigation]='false'>
                <e-breadcrumb-items>
                    <e-breadcrumb-item iconCss= 'e-icons e-home' url= 'https://ej2.syncfusion.com/angular/demos/'>
                    </e-breadcrumb-item>
                    <e-breadcrumb-item text= 'Components' url= 'https://ej2.syncfusion.com/angular/demos/datagrid/overview'>
                    </e-breadcrumb-item>
                    <e-breadcrumb-item text= 'Navigations' url= 'https://ej2.syncfusion.com/angular/demos/menu/default'>
                    </e-breadcrumb-item>
                    <e-breadcrumb-item text= 'Breadcrumb' url= 'https://ej2.syncfusion.com/angular/demos/breadcrumb/default'>
                    </e-breadcrumb-item>
                </e-breadcrumb-items>
            </ejs-breadcrumb>
            <br />
            <br/>
            <div class="header"><b>EnableNavigation - true</b></div><br />
            <ejs-breadcrumb [enableNavigation]='true'>
                <e-breadcrumb-items>
                    <e-breadcrumb-item iconCss= 'e-icons e-home' url= 'https://ej2.syncfusion.com/angular/demos/'>
                    </e-breadcrumb-item>
                    <e-breadcrumb-item text= 'Components' url= 'https://ej2.syncfusion.com/angular/demos/datagrid/overview'>
                    </e-breadcrumb-item>
                    <e-breadcrumb-item text= 'Navigations' url= 'https://ej2.syncfusion.com/angular/demos/menu/default'>
                    </e-breadcrumb-item>
                    <e-breadcrumb-item text= 'Breadcrumb' url= 'https://ej2.syncfusion.com/angular/demos/breadcrumb/default'>
                    </e-breadcrumb-item>
                </e-breadcrumb-items>
            </ejs-breadcrumb>
        </div>`
})

export class AppComponent {}


