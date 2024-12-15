import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend, closest, isNullOrUndefined, remove, removeClass } from '@syncfusion/ej2-base';
import { DataManager, Query } from '@syncfusion/ej2-data';
import {
    EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ScheduleComponent, CellClickEventArgs, MonthAgendaService
} from '@syncfusion/ej2-angular-schedule';
import { ContextMenuComponent, MenuItemModel, BeforeOpenCloseMenuEventArgs, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';
import { scheduleData } from './datasource';

@Component({
imports: [
        
        ScheduleModule,
        ButtonModule,
        ContextMenuModule
    ],
standalone: true,
    selector: 'app-root',
    templateUrl: './app.component.html',
    providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService],
    styleUrls: ['./index.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild('scheduleObj') public scheduleObj!: ScheduleComponent;
    @ViewChild('menuObj') public menuObj!: ContextMenuComponent;

    public allowResizing: Boolean = false;
    public allowDragDrop: Boolean = false;
    public selectedDate: Date = new Date(2024, 1, 15);
    public eventSettings: EventSettingsModel = { dataSource: <Object[]>extend([], scheduleData, undefined, true) };
    public selectedTarget!: Element;
    public targetElement!: HTMLElement;
    public menuItems: MenuItemModel[] = [
        { text: 'Cut Event', iconCss: 'e-icons e-cut', id: 'Cut' },
        { text: 'Copy Event', iconCss: 'e-icons e-copy', id: 'Copy' },
        { text: 'Paste', iconCss: 'e-icons e-paste', id: 'Paste' }
    ];

    ngOnInit(): void {
        // Any initialization logic can be placed here
    }

    public onContextMenuBeforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
        const newEventElement: HTMLElement = document.querySelector('.e-new-event') as HTMLElement;
        if (newEventElement) {
            remove(newEventElement);
        }
        this.scheduleObj.closeQuickInfoPopup();
        this.targetElement = args.event.target as HTMLElement;
        if (closest(this.targetElement, '.e-contextmenu')) {
            return;
        }
        this.selectedTarget = closest(this.targetElement, '.e-appointment,.e-work-cells,' +
            '.e-vertical-view .e-date-header-wrap .e-all-day-cells,.e-vertical-view .e-date-header-wrap .e-header-cells');
        if (isNullOrUndefined(this.selectedTarget)) {
            args.cancel = true;
            return;
        }
        if (this.selectedTarget.classList.contains('e-appointment')) {
            this.menuObj.showItems(['Cut', 'Copy'], true);
            this.menuObj.hideItems(['Paste'], true);
        } else {
            this.menuObj.showItems(['Paste'], true);
            this.menuObj.hideItems(['Cut', 'Copy'], true);
        }
    }

    public onMenuItemSelect(args: MenuEventArgs): void {
        const selectedMenuItem: string = args.item.id as string;
        switch (selectedMenuItem) {
            case 'Cut':
                this.scheduleObj.cut([this.selectedTarget] as HTMLElement[]);
                break;
            case 'Copy':
                this.scheduleObj.copy([this.selectedTarget] as HTMLElement[]);
                break;
            case 'Paste':
                this.scheduleObj.paste(this.targetElement);
                break;
        }
    }
}


