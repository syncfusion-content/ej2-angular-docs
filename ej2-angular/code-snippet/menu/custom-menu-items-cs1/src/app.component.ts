

import { Component, Inject } from '@angular/core';
import { FieldSettingsModel } from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(false);

@Component({
    selector: 'app-root',
    styleUrls: ['./template.css'],
    template: `
    <div id="menuTemplate" class="menu-section">
    <div class="menu-control">
        <ejs-menu [items]='dataSource' [fields]='menuFields' [animationSettings]="animation" cssClass="e-template-menu">
            <ng-template #template let-dataSource="">
                {{dataSource.category}}
                <div *ngIf="dataSource.value" style="width:100%;display:flex;justify-content:space-between;">
                    <img *ngIf="dataSource.url" class="e-avatar e-avatar-small"
                        src="src/images/platforms/{{dataSource.url}}.png" />
                    <span style="width:100%;">{{dataSource.value}}</span>
                    <span *ngIf="dataSource.count" class='e-badge e-badge-success'>{{dataSource.count}}</span>
                </div>
                <div *ngIf="dataSource.about" tabindex="0" class="e-card">
                    <div class="e-card-header">
                        <div class="e-card-header-caption">
                            <div class="e-card-header-title">About Us</div>
                        </div>
                    </div>
                    <div class="e-card-content">
                        {{dataSource.about.value}}
                    </div>
                    <div class="e-card-actions">
                        <button class="e-btn e-outline" style="pointer-events: auto;">
                            Read More
                        </button>
                    </div>
                </div>
            </ng-template>
        </ejs-menu>
    </div>
</div>
    `
})

export class AppComponent {
animation: any;
      constructor(@Inject('sourceFiles') public sourceFiles: any) {
        sourceFiles.files = ['template.css'];
    }
    //Template datasource
    public dataSource: { [key: string]: Object }[] = [
     {
            category: 'Products',
            options: [
                { value: 'JavaScript', url: 'https://ej2.syncfusion.com/angular/documentation/../../../../../menu/images/javascript' },
                { value: 'Angular', url: '../../../../../../menu/images/angular' },
                { value: 'ASP.NET Core', url: '../../../../../../menu/images/core' },
                { value: 'ASP.NET MVC', url: '../../../../../../menu/images/mvc' }
            ]
        },
        {
            category: 'Services',
            options: [
                { value: 'Application Development', count: '1200+' },
                { value: 'Maintenance & Support', count: '3700+' },
                { value: 'Quality Assurance' },
                { value: 'Cloud Integration', count: '900+' }
            ]
        },
        {
            category: 'About Us',
            options: [
                {
                    id: 'about',
                    about: {
                        value: "We are on a mission to provide world-class best software solutions for web, mobile and desktop platforms. Around 900+ applications are desgined and delivered to our customers to make digital & strengthen their businesses."
                    }
                }
            ]
        },
        { category: 'Careers' },
        { category: 'Sign In' }
    ];

    // Menu fields definition
    public menuFields: object = {
        text: ['category', 'value'],
        children: ['options']
    };
}


