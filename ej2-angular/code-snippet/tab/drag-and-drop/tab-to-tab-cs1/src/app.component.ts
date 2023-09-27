


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { TabComponent, DragEventArgs } from '@syncfusion/ej2-angular-navigations';
import { isNullOrUndefined } from "@syncfusion/ej2-base";

/**
 * Tab Component
 */

@Component({
    selector: 'app-container',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('firstTabObj') public firstTabObj?: TabComponent;
    @ViewChild('secondTabObj') public secondTabObj?: TabComponent;

    public headerText: Object[] = [{ 'text': 'India' }, { 'text': 'Australia' }, { 'text': 'USA' }, { 'text': 'France' }, { 'text': 'HTML' }, { 'text': 'C Sharp(C#)' }, { 'text': 'Java' }, { 'text': 'VB.Net' }];
    public firstTabitem: Object[] = [];
    public secondTabitem: Object[] = [];
    public dragItemIndex?: number;
    public dragItemContainer?: HTMLElement;

    public content0: string = 'India officially the Republic of India, is a country in South Asia. It is the seventh-largest country by area, the second-most populous country with over 1.2 billion people, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the south-west, and the Bay of Bengal on the south-east, it shares land borders with Pakistan to the west;China, Nepal, and Bhutan to the north-east; and Burma and Bangladesh to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; in addition, India Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia.';

    public content1: string = 'Australia, officially the Commonwealth of Australia, is a country comprising the mainland of the Australian continent, the island of Tasmania and numerous smaller islands. It is the world sixth-largest country by total area. Neighboring countries include Indonesia, East Timor and Papua New Guinea to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east.';

    public content2: string = 'The United States of America (USA or U.S.A.), commonly called the United States (US or U.S.) and America, is a federal republic consisting of fifty states and a federal district. The 48 contiguous states and the federal district of Washington, D.C. are in central North America between Canada and Mexico. The state of Alaska is west of Canada and east of Russia across the Bering Strait, and the state of Hawaii is in the mid-North Pacific. The country also has five populated and nine unpopulated territories in the Pacific and the Caribbean.';

    public content3: string = 'France, officially the French Republic is a sovereign state comprising territory in western Europe and several overseas regions and territories. The European part of France, called Metropolitan France, extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean; France covers 640,679 square kilo metres and as of August 2015 has a population of 67 million, counting all the overseas departments and territories.';

    public content4: string = 'HyperText Markup Language, commonly referred to as HTML, is the standard markup language used to create web pages. Along with CSS, and JavaScript, HTML is a cornerstone technology, used by most websites to create visually engaging web pages, user interfaces for web applications, and user interfaces for many mobile applications.[1] Web browsers can read HTML files and render them into visible or audible web pages. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language.';

    public content5: string = 'C# is intended to be a simple, modern, general-purpose, object-oriented programming language. Its development team is led by Anders Hejlsberg. The most recent version is C# 5.0, which was released on August 15, 2012.';

    public content6: string = 'Java is a set of computer software and specifications developed by Sun Microsystems, later acquired by Oracle Corporation, that provides a system for developing application software and deploying it in a cross-platform computing environment. Java is used in a wide variety of computing platforms from embedded devices and mobile phones to enterprise servers and supercomputers. While less common, Java applets run in secure, sandboxed environments to provide many features of native applications and can be embedded in HTML pages.';

    public content7: string = 'The command-line compiler, VBC.EXE, is installed as part of the freeware .NET Framework SDK. Mono also includes a command-line VB.NET compiler. The most recent version is VB 2012, which was released on August 15, 2012.';

    firstTabdragStart(args: DragEventArgs): void {
        this.firstTabitem = [(this.firstTabObj as TabComponent).items[args.index]];
        args.draggedItem.style.visibility = 'hidden';
        this.dragItemContainer = <HTMLElement>args.draggedItem.closest('.e-tab');
    }

    firstTabDragStop(args: DragEventArgs): void {
        if (!isNullOrUndefined((args.target as HTMLElement).closest('.e-tab') as Element) && !(this.dragItemContainer as HTMLElement).isSameNode(args.target.closest('.e-tab'))) {
            args.cancel = true;
            let TabElement: HTMLElement = <HTMLElement>args.target.closest('.e-tab');
            let dropItem: HTMLElement = <HTMLElement>args.target.closest('.e-toolbar-item');
            if (TabElement != null && dropItem != null) {
                const childrenArray = Array.from((this.firstTabObj as TabComponent).element.children[0].children[0].children);
                const toolbarItem: Element[] = childrenArray.filter(el => el.classList.contains('e-toolbar-item'));
                this.dragItemIndex = toolbarItem.indexOf(args.draggedItem);
                let dropItemContainer: Element = args.target.closest('.e-toolbar-items') as Element;
                let dropChildArray: Element[] = (Array.from(dropItemContainer.children)).filter(el => el.classList.contains('e-toolbar-item'));
                let dropItemIndex: number = (dropItemContainer != null) ? dropChildArray.indexOf(dropItem) as number : '' as any;
                (this.secondTabObj as TabComponent).addTab(this.firstTabitem, dropItemIndex);
                (this.firstTabObj as TabComponent).removeTab(this.dragItemIndex);
            }
        }
    }

    secondTabDragStart(args: DragEventArgs): void {
        this.secondTabitem = [(this.secondTabObj as TabComponent).items[args.index]];
        args.draggedItem.style.visibility = 'hidden';
        this.dragItemContainer = <HTMLElement>args.draggedItem.closest('.e-tab');
    }

    secondTabDragStop(args: DragEventArgs): void {
        if (!isNullOrUndefined(args.target.closest('.e-tab') as Element) && !(this.dragItemContainer as HTMLElement).isSameNode(args.target.closest('.e-tab'))) {
            args.cancel = true;
            let TabElement: HTMLElement = <HTMLElement>args.target.closest('.e-tab');
            let dropItem: HTMLElement = <HTMLElement>args.target.closest('.e-toolbar-item');
            if (TabElement != null && dropItem != null) {
                const childrenArray = Array.from((this.secondTabObj as TabComponent).element.children[0].children[0].children);
                const toolbarItem: Element[] = childrenArray.filter(el => el.classList.contains('e-toolbar-item'));
                this.dragItemIndex = toolbarItem.indexOf(args.draggedItem);
                let dropItemContainer: Element = args.target.closest('.e-toolbar-items') as Element;
                let dropChildArray: Element[] = (Array.from(dropItemContainer.children)).filter(el => el.classList.contains('e-toolbar-item'));
                let dropItemIndex: number = (dropItemContainer != null) ? dropChildArray.indexOf(dropItem) as number : '' as any;
                (this.firstTabObj as TabComponent).addTab(this.secondTabitem, dropItemIndex);
                (this.secondTabObj as TabComponent).removeTab(this.dragItemIndex);
            }
        }
    }
}



