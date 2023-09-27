

import { enableRtl } from '@syncfusion/ej2-base';
import { Component} from '@angular/core';
// Enables Right to left alignment for all controls
enableRtl(true);

@Component({
    selector: 'app-container',
    template: `<ejs-listview id='sample-list' [dataSource]='data' [fields]='fields' showHeader='true' headerTitle='Social Media'>
    <ng-template #template let-data="">
    <span class='{{data.class}} icon'><span class='media'>{{data.socialMedia}}</span></span>
    </ng-template></ejs-listview>`
})

export class AppComponent {
    public data: Object = [
    { class: 'facebook', socialMedia: 'Facebook', id: 'media1' },
    { class: 'twitter', socialMedia: 'Twitter', id: 'media2' },
    { class: 'tumblr', socialMedia: 'Tumblr', id: 'media4' },
    { class: 'google-plus', socialMedia: 'Google Plus', id: 'media5' },
    { class: 'skype', socialMedia: 'Skype', id: 'media6' },
    { class: 'vimeo', socialMedia: 'Vimeo', id: 'media7' },
    { class: 'instagram', socialMedia: 'Instagram', id: 'media8' },
    { class: 'youtube', socialMedia: 'YouTube', id: 'media9' },
    ];

    public fields: Object = { text: 'socialMedia' };
}



