
import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="sample_container badge-list">
        <ejs-listview id='lists' [dataSource]='dataSource' [fields]='fields' headerTitle='Inbox' [showHeader]='true'>
            <ng-template #template let-dataSource="">
                <div class="listWrapper" style="width: inherit;height: inherit;">
                    <span class="{{dataSource.icons}} list_svg">&nbsp;</span>
                    <span class="list_text">{{dataSource.text}} </span>
                    <span class="{{dataSource.badge}}" *ngIf="dataSource.badge !== '' " style="float: right;margin-top: 16px;font-size: 12px;">{{badge[dataSource.text]}} New</span>
                </div>
            </ng-template>
        </ejs-listview>
        <p class='crossline'></p>
        <span class='incr_button'>
          <button class='e-btn e-primary' (click)="onClick()">Increment Badge Count</button>
        </span>
    </div>
    
    `
})

export class AppComponent {
    public badge = {
        Primary: 3,
        Social: 27,
        Promotions: 7,
        Updates: 13,
        Important: 2,
        Drafts: 7
    } as any;
    // Datasource for listview, badge field is the class data for Badges
    public dataSource: { [key: string]: Object }[] = [
        { id: 'p_01', text: 'Primary', badge: 'e-badge e-badge-primary', icons: 'primary', type: 'Primary' },
        { id: 'p_02', text: 'Social', badge: 'e-badge e-badge-secondary', icons: 'social', type: 'Primary' },
        { id: 'p_03', text: 'Promotions', badge: 'e-badge e-badge-success', icons: 'promotion', type: 'Primary' },
        { id: 'p_04', text: 'Updates', badge: 'e-badge e-badge-info', icons: 'updates', type: 'Primary' },
        { id: 'p_05', text: 'Starred', badge: '', icons: 'starred', type: 'All Labels' },
        { id: 'p_06', text: 'Important', badge: 'e-badge e-badge-danger', icons: 'important', type: 'All Labels' },
        { id: 'p_07', text: 'Sent', badge: '', icons: 'sent', type: 'All Labels' },
        { id: 'p_08', text: 'Outbox', badge: '', icons: 'outbox', type: 'All Labels' },
        { id: 'p_09', text: 'Drafts', badge: 'e-badge e-badge-warning', icons: 'draft', type: 'All Labels' },
    ];

    // Map fields
    public fields: object = { groupBy: 'type' };

    public onClick() {
        let badgeKeys = Object.keys(this.badge);
        for (let badge of badgeKeys) {
            this.badge[badge]++;
        }
    }

}




