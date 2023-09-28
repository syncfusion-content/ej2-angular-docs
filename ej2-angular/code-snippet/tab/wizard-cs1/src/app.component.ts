


import { Component, ViewChild, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';

import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { TabComponent, SelectEventArgs } from '@syncfusion/ej2-angular-navigations';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { GridComponent, RowSelectEventArgs } from '@syncfusion/ej2-angular-grids';
import { isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
/**
 * Create wizard using Tab
 */
// tslint:disable:max-line-length
@Component({
    selector: 'app-container',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    @ViewChild('tab') tab?: TabComponent;
    @ViewChild('pass_name1') input1?: ElementRef;
    @ViewChild('pass_name2') input2?: ElementRef;
    @ViewChild('pass_name3') input3?: ElementRef;
    @ViewChild('alertDialog') alertDlg?: DialogComponent;
    @ViewChild('date') journeyDate?: DatePickerComponent;
    @ViewChild('quota') ticketType?: DropDownListComponent;
    @ViewChild('endPoint') endPoint?: DropDownListComponent;
    @ViewChild('startPoint') startPoint?: DropDownListComponent;
    @ViewChild('availableTrain') availTrainGrid?: GridComponent;
    @ViewChild('pass_age1') passage1?: NumericTextBoxComponent;
    @ViewChild('ticketDetailGrid') ticketDetailGrid?: GridComponent;
    @ViewChild('pass_gender1') passgender1?: DropDownListComponent;
    @ViewChild('pass_gender2') passgender2?: DropDownListComponent;
    @ViewChild('pass_gender3') passgender3?: DropDownListComponent;
    @ViewChild('pass_berth1') passBerth1?: DropDownListComponent;
    @ViewChild('pass_berth2') passBerth2?: DropDownListComponent;
    @ViewChild('pass_berth3') passBerth3?: DropDownListComponent;

    public fields: Object = {};
    public quotas: Object[] = [];
    public gender: Object[] = [];
    public berths: Object[] = [];
    public today: Date = new Date();
    public cities?: any;
    public locations?: any;
    public headerText: Object[] = [];
    public dlgButtons: Object[] = [];
    public selectedTrain?: any;
    public autoCompleteFields: Object = {};
    public dlgTarget: HTMLElement = document.querySelector('#container') as HTMLElement;
    public dateMin?: Date;
    public dateMax?: Date;
    public result: Object[] = [];
    public reserved: Object[] = [];
    public err1: string = '';
    public err2: string = '';
    public err3: string = '';
    public displayAmt: string = '';

    public ngOnInit(): void {
        document.body.style.visibility = 'hidden';
        this.dateMin = new Date(this.today.getTime());
        this.dateMax = new Date(this.today.getTime() + 60 * 24 * 60 * 60 * 1000);
        this.headerText = [
            { 'text': 'New Booking' },
            { 'text': 'Train List' },
            { 'text': 'Add Passenger' },
            { 'text': 'Make Payment' }];

        this.quotas = [
            { id: '1', text: 'Business Class' },
            { id: '2', text: 'Economy Class' },
            { id: '4', text: 'Common Class' }
        ];

        this.gender = [
            { id: '1', text: 'Male' },
            { id: '2', text: 'Female' }
        ];

        this.berths = [
            { id: '1', text: 'Upper' },
            { id: '2', text: 'Lower' },
            { id: '3', text: 'Middle' },
            { id: '4', text: 'Window' },
            { id: '5', text: 'Aisle' }
        ];
        this.cities = [
            { name: 'Chicago', fare: 300 },
            { name: 'San Francisco', fare: 125 },
            { name: 'Los Angeles', fare: 175 },
            { name: 'Seattle', fare: 250 },
            { name: 'Florida', fare: 150 }
        ];

        this.fields = { id: 'id', text: 'text', value: 'text' };
        this.autoCompleteFields = { text: 'name', value: 'name' };

        this.dlgButtons = [{
            buttonModel: { content: 'Ok', isPrimary: true },
            click: (() => {
                (this.alertDlg as DialogComponent).hide();
                (this.tab as TabComponent).enableTab(0, true);
                (this.tab as TabComponent).enableTab(1, false);
                (this.tab as TabComponent).enableTab(2, false);
                (this.tab as TabComponent).enableTab(3, false);
                (this.tab as TabComponent).select(0);
            })
        }];
    }

    public ngAfterViewInit(): void {
        document.body.style.visibility = 'visible';
    }

    public showDate(): void {
        (this.journeyDate as DatePickerComponent).show();
    }

    public trainSelected(args: RowSelectEventArgs): void {
        this.selectedTrain = args.data;
    }

    public tabSelected(e: SelectEventArgs): void {
        if (e.isSwiped) {
            e.cancel = true;
        }
    }

    public dlgCreated(): void {
        (this.alertDlg as DialogComponent).hide();
    }

       public btnClicked(e: any): void {
        switch (e.target.id) {
            case 'searchNext':
                /* Validate the Source, Destination, Date and Class chosen and proceed only if all the fields are selected */
                if (!isNOU((this.startPoint as DropDownListComponent).value) && !isNOU((this.endPoint as DropDownListComponent).value) &&
                    !isNOU((this.ticketType as DropDownListComponent).value) && !isNOU((this.journeyDate  as DatePickerComponent ).value)) {
                    if (!isNOU((this.startPoint as DropDownListComponent).value) && (this.startPoint as DropDownListComponent).value == (this.endPoint as DropDownListComponent).value) {
                        this.err1 = '* Arrival point cannot be same as Departure';
                    } else {
                        (this.tab as TabComponent).enableTab(0, false);
                        (this.tab as TabComponent).enableTab(1, true);
                        this.filterTrains(e);
                        (this.tab as TabComponent).select(1);
                        this.err1 = '';
                        this.err2 = '';
                    }
                } else {
                    this.err1 = '* Please fill all the details before proceeding';
                }
                break;
            case 'bookTickets':
                /* Based on the selected station generate Grid content to display trains available */
                if ((this.availTrainGrid as GridComponent).getSelectedRecords() === undefined || (this.availTrainGrid as GridComponent).getSelectedRecords().length === 0) {
                    this.err2 = '* Select your convenient train';
                } else {
                    (this.tab as TabComponent).enableTab(2, true);
                    (this.tab as TabComponent).select(2);
                    (this.tab as TabComponent).enableTab(1, false);
                    this.err2 = '';
                }
                break;
            case 'confirmTickets':
                /* Get the Passenger details and validate the fields must not be left empty */
                if ((this.input1 as any).nativeElement.value === '' || isNOU((this.passgender1 as DropDownListComponent).value) || isNOU((this.passage1 as NumericTextBoxComponent).value)) {
                    this.err3 = '* Please enter passenger details';
                } else {
                    (this.tab as TabComponent).enableTab(3, true);
                    (this.tab as TabComponent).select(3);
                    (this.tab as TabComponent).enableTab(2, false);
                    this.err3 = '';
                    this.finalizeDetails(e);
                }
                break;
            case 'makePayment':
                this.alertDlg?.show();
                break;
            case 'goToSearch':
                /* Go back to change class, date or boarding places */
                this.selectedTrain = [];
                (this.tab as TabComponent).enableTab(0, true);
                (this.tab as TabComponent).select(0);
                (this.tab as TabComponent).enableTab(1, false);
                break;
            case 'goBackToBook':
                /* Change the preferred train chosen already */
                (this.tab as TabComponent).enableTab(1, true);
                (this.tab as TabComponent).select(1);
                (this.tab as TabComponent).enableTab(2, false);
                break;
            case 'goBackDetails':
                /* Update passenger detail before confirming the payment */
                (this.tab as TabComponent).enableTab(2, true);
                (this.tab as TabComponent).select(2);
                (this.tab as TabComponent).enableTab(3, false);
                break;
        }
    }
    public filterTrains(args: any): void {
        /* Generating trains based on source and destination chosen */
        let fromCity: string = <string>this.startPoint?.value;
        let toCity: string = <string>this.endPoint?.value;
        let count: number = Math.floor((Math.random() * 3) + 2);

        for (let i: number = 0; i < count; i++) {
            let details = <Details>{};
            details.TrainNo = Math.floor((Math.random() * 20) + 19000);
            details.Name = 'Train ' + i;
            details.Departure = fromCity;
            details.Arrival = toCity;
            details.Availability = Math.floor((Math.random() * 20) + 20);
            this.result.push(details);
        }
    }

    public availableTrainGridcreated(): void {
        (this.availTrainGrid as GridComponent).dataSource = this.result;
    }

    public finalizeDetails(args: any): void {
        /* Get the passenger details and update table with name and other details for confirmation */
        let passCount: any = 0;
        for (let i: number = 1; i <= 3; i++) {
            if ((this.input1 as any).nativeElement.value !== '') {
                let details = <Details>{};
                let gender: any = (i === 1) ? (this.passgender1 as DropDownListComponent).value : (i === 2) ?
                    (this.passgender2 as DropDownListComponent).value : (this.passgender3 as DropDownListComponent).value;
                let berth: any = (i === 1) ? (this.passBerth1 as DropDownListComponent).value : (i === 2) ?
                    (this.passBerth2 as DropDownListComponent).value : (this.passBerth3 as DropDownListComponent).value;
                details.TrainNo = this.selectedTrain.TrainNo.toString();
                details.PassName = (i === 1) ? (this.input1 as any).nativeElement.value : (i === 2) ?
                    (this.input2 as any).nativeElement.value : (this.input3 as any).nativeElement.value;
                details.Gender = (gender === '') ? 'Male' : gender;
                details.Berth = (berth === '') ? 'Any' : berth;
                if (details.PassName !== '') { this.reserved.push(details); }
                passCount++;
            }
            let calcFare: any = 0;
            for (let i: number = 0; i < this.cities; i++) {
                if ((this.startPoint as DropDownListComponent).value === this.cities[i].name) { calcFare = calcFare + this.cities[i].fare; }
                if ((this.endPoint as DropDownListComponent).value === this.cities[i].name) { calcFare = calcFare + this.cities[i].fare; }
            }
            if ((this.ticketType as DropDownListComponent).value === 'Economy Class') {
                this.displayAmt = "Total payable amount: $" + passCount * (300 + calcFare)
            } else if ((this.ticketType as DropDownListComponent).value === 'Business Class') {
                this.displayAmt = "Total payable amount: $" + passCount * (500 + calcFare)
            } else if ((this.ticketType as DropDownListComponent).value === 'Common Class') {
                this.displayAmt = "Total payable amount: $" + passCount * (150 + calcFare)
            }
        }
    }
    public ticketDetailGridcreated(): void {
        (this.ticketDetailGrid as GridComponent).dataSource = this.reserved;
      }
}
interface Details {
    TrainNo: number;
    Name: string;
    Departure: string;
    Arrival: string;
    Availability: number;
    PassName: string;
    Gender: any;
    Berth: string;
    SeatNo: number;
}



