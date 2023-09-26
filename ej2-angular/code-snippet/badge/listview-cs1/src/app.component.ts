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
                    <span class="{{dataSource.badge}}" style="float: right;margin-top: 16px;font-size: 12px;">{{dataSource.messages}}</span>
                </div>
            </ng-template>
        </ejs-listview>
    </div>
    `
})

export class AppComponent { 
    // Datasource for listview, badge field is the class data for Badges
    public dataSource: { [key: string]: Object }[] = [
        { id: 'p_01', text: 'Primary', messages: '3 New', badge: 'e-badge e-badge-primary', icons: 'primary', type: 'Primary' },
        { id: 'p_02', text: 'Social', messages: '27 New', badge: 'e-badge e-badge-secondary', icons: 'social', type: 'Primary' },
        { id: 'p_03', text: 'Promotions', messages: '7 New', badge: 'e-badge e-badge-success', icons: 'promotion', type: 'Primary' },
        { id: 'p_04', text: 'Updates', messages: '13 New', badge: 'e-badge e-badge-info', icons: 'updates', type: 'Primary' },
        { id: 'p_05', text: 'Starred', messages: '', badge: '', icons: 'starred', type: 'All Labels' },
        { id: 'p_06', text: 'Important', messages: '2 New', badge: 'e-badge e-badge-danger', icons: 'important', type: 'All Labels' },
        { id: 'p_07', text: 'Sent', messages: '', badge: '', icons: 'sent', type: 'All Labels' },
        { id: 'p_08', text: 'Outbox', messages: '', badge: '', icons: 'outbox', type: 'All Labels' },
        { id: 'p_09', text: 'Drafts', messages: '7 New', badge: 'e-badge e-badge-warning', icons: 'draft', type: 'All Labels' },
    ];

    // Map fields
    public fields: object = { groupBy: 'type' };
}




