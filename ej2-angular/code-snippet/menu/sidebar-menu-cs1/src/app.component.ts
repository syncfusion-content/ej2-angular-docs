

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { Accordion } from '@syncfusion/ej2-navigations';
import { SidebarComponent, AccordionComponent, ExpandEventArgs, AccordionClickArgs } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div class="header">
        <span id="hamburger" class="e-icons menu default" (click)='hamburgerClick()'></span>
            <div class="content">Header content</div>
        </div>
        <ejs-sidebar #sidebar id='default-sidebar' width='220px' type='Over'>
            <div class="title-header">
                <div style="display:inline-block"> Menu </div>
                <span  id="close" class="e-icons" (click)='close()'></span>
            </div>
            <div class="content-area">
                <ejs-accordion #accordion [items]='data' (expanding)='expand($event)' (clicked)='clicked($event)'></ejs-accordion>
            </div>
        </ejs-sidebar>
        <!-- main content declaration -->
        <div>
            <div class="main-content">Main content</div>
        </div>`
})

export class AppComponent {
    @ViewChild('sidebar')
    public sidebarObj?: SidebarComponent;
    @ViewChild('accordion')
    public accordionObj?: AccordionComponent;

    public data: { [key: string]: Object }[] = [
        {
            header: 'Appliances',
            content: '<div id="Appliances_Items"></div>',
            subItems: [
                {
                    header: 'Kitchen',
                    content: '<div id="Appliances_Kitchen_Items"></div>',
                    subItems: [
                        { header: 'Electric Cookers' },
                        { header: 'Coffee Makers' },
                        { header: 'Blenders' },
                    ]
                },
                {
                    header: 'Washing Machine',
                    content: '<div id="Appliances_Washing_Items"></div>',
                    subItems: [
                        { header: 'Fully Automatic' },
                        { header: 'Semi Automatic' }
                    ]
                },
                {
                    header: 'Air Conditioners',
                    content: '<div id="Appliances_Conditioners_Items"></div>',
                    subItems: [
                        { header: 'Inverter ACs' },
                        { header: 'Split ACs' },
                        { header: 'Window ACs' },
                    ]
                }
            ]
        },
        {
            header: 'Accessories',
            content: '<div id="Accessories_Items"></div>',
            subItems: [
                {
                    header: 'Mobile',
                    content: '<div id="Accessories_Mobile_Items"></div>',
                    subItems: [
                        { header: 'Headphones' },
                        { header: 'Memory Cards' },
                        { header: 'Power Banks' }
                    ]
                },
                {
                    header: 'Computer',
                    content: '<div id="Accessories_Computer_Items"></div>',
                    subItems: [
                        { header: 'Pendrives' },
                        { header: 'External Hard Disks' },
                        { header: 'Monitors' }
                    ]
                }
            ]
        },
        {
            header: 'Fashion',
            content: '<div id="Fashion_Items"></div>',
            subItems: [
                { header: 'Men' },
                { header: 'Women' }
            ]
        },
        {
            header: 'Home & Living',
            content: '<div id="Home_Living_Items"></div>',
            subItems: [
                { header: 'Furniture' },
                { header: 'Decor' }
            ]
        },
        {
            header: 'Entertainment',
            content: '<div id="Entertainment_Items"></div>',
            subItems: [
                { header: 'Televisions' },
                { header: 'Home Theatres' },
                { header: 'Gaming Laptops' }
            ]
        }
    ];

    //Expanding Event function for Accordion component.
    public expand(e: ExpandEventArgs): void {
        if (e.isExpanded) {
            if ((e.element as HTMLElement).getElementsByClassName('e-acrdn-content')[0].children[0].classList.contains('e-accordion')) {
                return;
            }
            //Initialize Nested Accordion component
            let nestAcrdn: Accordion = new Accordion({
                items: (<{ subItems: object[] }>e.item).subItems,
                expanding: this.expand,
                clicked: this.clicked
            });

            let elemId: string = (e.element as HTMLElement).getElementsByClassName('e-acrdn-content')[0].children[0].id;
            //Render initialized Nested Accordion component
            nestAcrdn.appendTo('#' + elemId);
        }
    }

    public clicked(e: AccordionClickArgs): void {
        if (!e.item && !(((e.originalEvent as Event).target as HTMLElement).closest('.e-acrdn-item') as Element).getElementsByClassName('e-tgl-collapse-icon').length) {
            this.sidebarObj?.hide();
        }
    }

    public hamburgerClick(): void {
        this.sidebarObj?.show();
        (this.accordionObj as AccordionComponent).refresh();
    }

    public close(): void {
        this.sidebarObj?.hide();
    }
}


