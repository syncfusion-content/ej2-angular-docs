


import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, BeforeSanitizeHtmlArgs } from '@syncfusion/ej2-angular-richtexteditor';
import { detach } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    template: `<ejs-richtexteditor id='defaultRTE' [value]='rteValue' (beforeSanitizeHtml)='onBeforeSanitizeHtml($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent  {
    public rteValue:string =`<div>Prevention of Cross Sit Scripting (XSS)</div><script>alert('hi')</script>`;
    public onBeforeSanitizeHtml(e: BeforeSanitizeHtmlArgs): void {
        e.helper = (value: string) => {
            e.cancel = true;
            let temp: HTMLElement = document.createElement('div');
            temp.innerHTML = value;
            let scriptTag: HTMLElement = temp.querySelector('script') as HTMLElement;
            if (scriptTag) {
                detach(scriptTag);
            }
            return temp.innerHTML;
      }
    }
}



