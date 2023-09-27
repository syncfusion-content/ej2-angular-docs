

import { Component, ViewChild,OnInit } from '@angular/core';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { Ajax } from '@syncfusion/ej2-base';
/**
 * Load content through Ajax
 */

@Component({
    selector: 'app-container',
    template: `<ejs-tab id="tab_html_markup" #tab_html_markup>
           <e-tabitems>
                    <e-tabitem [header]='headerText[0]'>
                        <ng-template #content>
                            Twitter is an online social networking service that enables users to send and read short 140-character messages called "tweets".
                            Registered users can read and post tweets, but those who are unregistered can only read them. Users access Twitter
                            through the website interface, SMS or mobile device app Twitter Inc. is based in San Francisco and has more than 25
                            offices around the world. Twitter was created in March 2006 by Jack Dorsey, Evan Williams, Biz Stone, and Noah Glass
                            and launched in July 2006. The service rapidly gained worldwide popularity, with more than 100 million users posting
                            340 million tweets a day in 2012.The service also handled 1.6 billion search queries per day.
                        </ng-template>
                    </e-tabitem>
                    <e-tabitem [header]='headerText[1]'>
                        <ng-template #content>
                            Facebook is an online social networking service headquartered in Menlo Park, California. Its website was launched on February
                            4, 2004, by Mark Zuckerberg with his Harvard College roommates and fellow students Eduardo Saverin, Andrew McCollum,
                            Dustin Moskovitz and Chris Hughes.The founders had initially limited the website\'\s membership to Harvard students,
                            but later expanded it to colleges in the Boston area, the Ivy League, and Stanford University. It gradually added support
                            for students at various other universities and later to high-school students.
                        </ng-template>
                    </e-tabitem>
                    <e-tabitem [header]='headerText[2]' content="#content">
                    </e-tabitem>
                </e-tabitems>
            </ejs-tab>`
})
export class AppComponent {
    @ViewChild('tab_html_markup') tabObj?: TabComponent;
    public headerText: Object = [{ 'text': 'Twitter' }, { 'text': 'Facebook' },{ 'text': 'WhatsApp' }];

   ngOnInit() {
    let ajax: Ajax = new Ajax('./ajax.html', 'GET', true);
    ajax.send().then();
    ajax.onSuccess = (data: string): void => {
       (this.tabObj as TabComponent).items[2].content = data;
       (this.tabObj as TabComponent).refresh();
    };
    }
}



