


import { Component, ViewChild } from '@angular/core';
import { DropDownListModel, ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { TabComponent } from '@syncfusion/ej2-angular-navigations';
import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
/**
 * Adaptive Tab Component
 */

@Component({
    selector: 'app-container',
    // specifies the template url path
    template: ` <div id="wrapper" style='margin-top: 20px'><div id='content' style="margin: 0px auto">
          <div id="default" style="padding-top:20px;width:250px">
            <div class='row'>
                <div>
                    <label> Icon Position </label>
                </div><br/>
                <div>
                    <ejs-dropdownlist id='iconPosition' #iconPosition [dataSource]='positionData' (change)='onChange($event)' [value]='value' [fields]='fields' [popupHeight]='height'></ejs-dropdownlist>
                </div>
            </div>
        </div>
        <br/><div><ejs-tab id="element" #element>
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
                        <e-tabitem [header]='headerText[2]'>
                            <ng-template #content>
                                WhatsApp Messenger is a proprietary cross-platform instant messaging client for smartphones that operates under a subscription
                                business model. It uses the Internet to send text messages, images, video, user location and audio media messages to
                                other users using standard cellular mobile numbers. As of February 2016, WhatsApp had a user base of up to one billion,[10]
                                making it the most globally popular messaging application. WhatsApp Inc., based in Mountain View, California, was acquired
                                by Facebook Inc. on February 19, 2014, for approximately US$19.3 billion.
                            </ng-template>
                        </e-tabitem>
                    </e-tabitems>
                </ejs-tab>
        </div>
      </div>
 </div>`
    })
export class AppComponent {
    @ViewChild('element') tabObj?: TabComponent;
    @ViewChild('iconPosition') listObj?: DropDownListComponent;
    public positionData: Object[] = [
        { position: 'left', text: 'Left' },
        { position: 'right', text: 'Right'},
        { position: 'top',text: 'Top' },
        { position: 'bottom', text: 'Bottom' }
    ];
    public fields: Object = { text: 'text', value: 'position' };
    public height: string = '220px';
    public value: string = 'left';
    public onChange(ChangeEventArgs: any): void {
          let items: any = (this.tabObj as TabComponent).items;
          for(let i: number = 0; i < items.length; i++) {
             items[i].header.iconPosition = this.listObj?.value;
          }
    }
    public headerText: Object = [{ 'text': 'Twitter', 'iconCss': 'e-twitter' }, { 'text': 'Facebook', 'iconCss': 'e-facebook' },{ 'text': 'WhatsApp', 'iconCss': 'e-whatsapp' }];

}



