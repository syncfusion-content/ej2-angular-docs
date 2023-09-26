

import { Component, ViewChild } from "@angular/core";
import { enableRipple } from "@syncfusion/ej2-base";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";
import { ListViewComponent } from "@syncfusion/ej2-angular-lists";
import { ButtonComponent } from "@syncfusion/ej2-angular-buttons"
enableRipple(true);

@Component({
    selector: 'my-app',
    template: `<div id="text1">
            <input #textbox class="e-input" type="text" id="firstInput" placeholder="Filter" title="Type in a name" (keyup)="onFirstKeyUp($event)" />
              </div>
            <ejs-listview #list1 id='list-1' [dataSource]='firstListData' [fields]='fields' [sortOrder]='Ascending'  (select)="onFirstListSelect()"></ejs-listview>
             <div id="btn">
             <button ejs-button #btn1 id="firstBtn" (click)="firstbtnclick()"> >> </button>
             <button ejs-button #btn2 id="secondBtn" [disabled]=true (click)="secondbtnclick()"> > </button>
             <button ejs-button #btn3 id="thirdBtn" [disabled]=true (click)="thirdbtnclick()"> < </button>
             <button ejs-button #btn4 id="fourthBtn" (click)="fourthbtnclick()"> << </button>
             </div>

            <div id="text2">
            <input #text class="e-input" type="text" id="secondInput" placeholder="Filter" title="Type in a name" (keyup)="onSecondKeyUp($event)" />
            </div>
            <ejs-listview #list2 id='list-2' [dataSource]='secondListData' [fields]='fields' [sortOrder]='Ascending' (select)="onSecondListSelect()"></ejs-listview>
        `,
})

export class AppComponent {
    public fields?: Object;
    public firstListData?:any; secondListData: any;
    Ascending: any;
    constructor(){
    this.firstListData  = [
        { text: "Hennessey Venom", id: "list-01" },
        { text: "Bugatti Chiron", id: "list-02" },
        { text: "Bugatti Veyron Super Sport", id: "list-03" },
        { text: "SSC Ultimate Aero", id: "list-04" },
        { text: "Koenigsegg CCR", id: "list-05" },
        { text: "McLaren F1", id: "list-06" }
    ];

   this.secondListData = [
    { text: 'Aston Martin One- 77', id: 'list-07' },
    { text: 'Jaguar XJ220', id: 'list-08' },
    { text: 'McLaren P1', id: 'list-09' },
    { text: 'Ferrari LaFerrari', id: 'list-10' },
  ];

 this.fields = { text: "text", id: "id" };
  }
    @ViewChild('list1')firstListObj?: ListViewComponent;
    @ViewChild('list2')secondListObj?: ListViewComponent;
    @ViewChild('btn1')firstBtnObj?: ButtonComponent;
    @ViewChild('btn2')secondBtnObj?: ButtonComponent;
    @ViewChild('btn3')thirdBtnObj?: ButtonComponent;
    @ViewChild('btn4')fourthBtnObj?: ButtonComponent;
    @ViewChild('textbox')textboxEle: any;
    @ViewChild('text')textEle: any;
    ngAfterViewInit(){
        this.firstListData = (this.firstListObj as ListViewComponent | any).dataSource.slice();
        this.secondListData = (this.secondListObj as ListViewComponent | any).dataSource.slice();
    }
       //Here, all list items are moved to the second list on clicking move all button
    firstbtnclick() {
        (this.secondListObj as ListViewComponent).dataSource = Array.prototype.concat.call((this.firstListObj as ListViewComponent).dataSource, (this.secondListObj as ListViewComponent).dataSource);
        this.updateFirstListData();
        this.firstListObj?.removeMultipleItems((this.firstListObj as ListViewComponent | any).liCollection);
        this.firstListData = this.firstListData.concat((this.firstListObj as ListViewComponent).dataSource);
        this.secondListData = (this.secondListObj as ListViewComponent | any).dataSource.slice();
        (this.firstBtnObj as ButtonComponent).disabled = true;
        this.onFirstKeyUp((e: any) => {});;
        this.setButtonState();
    }

    //Here, the selected list items are moved to the second list on clicking move button
  secondbtnclick() {
        let e = this.firstListObj?.getSelectedItems();
        (this.secondListObj as ListViewComponent).dataSource = Array.prototype.concat.call((this.secondListObj as ListViewComponent).dataSource, (e as any).data);
        this.firstListObj?.removeItem((e as any).item);
        this.firstListData = (this.firstListObj as ListViewComponent).dataSource;
        this.secondListData = (this.secondListObj as ListViewComponent | any).dataSource.slice();
        this.onFirstKeyUp((e: any) => {});;
        (this.secondBtnObj as ButtonComponent).disabled = true;
        this.setButtonState();
    }

    //Here, the selected list items are moved to the first list on clicking move button
   thirdbtnclick () {
        let e = this.secondListObj?.getSelectedItems();
        (this.firstListObj as ListViewComponent).dataSource = Array.prototype.concat.call((this.firstListObj as ListViewComponent).dataSource, (e as any).data);
        this.secondListObj?.removeItem((e as any).item);
        this.secondListData = (this.secondListObj as ListViewComponent).dataSource;
        this.firstListData = (this.firstListObj as ListViewComponent | any).dataSource.slice();
        this.onSecondKeyUp((e: any) => {});
        (this.thirdBtnObj as ButtonComponent).disabled = true;
        this.setButtonState();

    }

    //Here, all list items are moved to the first list on clicking move all button
   fourthbtnclick() {
        (this.firstListObj as ListViewComponent).dataSource = Array.prototype.concat.call((this.firstListObj as ListViewComponent).dataSource, (this.secondListObj as ListViewComponent).dataSource);
        this.updateSecondListData();
        this.secondListObj?.removeMultipleItems((this.secondListObj as ListViewComponent | any).liCollection);
        this.secondListData = this.secondListData.concat((this.secondListObj as ListViewComponent).dataSource);
        this.firstListData = (this.firstListObj as ListViewComponent | any).dataSource.slice();
        this.onSecondKeyUp((e: any) => {});
        this.setButtonState();

    }

    //Here, the ListView data source is updated to the first list
    updateFirstListData() {
        Array.prototype.forEach.call((this.firstListObj as ListViewComponent | any).liCollection, (list) => {
            this.firstListData.forEach((data: any, index: any) => {
                if (list.innerText.trim() === data.text) {
                    delete this.firstListData[index];
                }
            });
        });
        this.textboxEle.nativeElement.value= '';
        let ds: any[] = [];
        this.firstListData.forEach((data: any) => {
            ds.push(data);
        })
        this.firstListData = ds;

    }

    //Here, the ListView dataSource is updated for the second list
    updateSecondListData() {
        Array.prototype.forEach.call((this.secondListObj as ListViewComponent | any).liCollection, (list) => {
            this.secondListData.forEach((data: any, index: string | number) => {
                if (list.innerText.trim() === data.text) {
                    delete this.secondListData[index];
                }
            });

        });
        this.textEle.nativeElement.value = '';
        let ds: any = [];
        this.secondListData.forEach((data: any) => {
            ds.push(data);
        })
        this.secondListData = ds;

    }
    onFirstListSelect() {
        (this.secondBtnObj as ButtonComponent).disabled = false;
    }
    onSecondListSelect() {
        (this.thirdBtnObj as ButtonComponent).disabled = false;
    }

    //Here, filtering is handled using the dataManager for the first list
    onFirstKeyUp(e: any) {
        let value = this.textboxEle.nativeElement.value;
        let data = new DataManager(this.firstListData).executeLocal(new Query().where('text', 'startswith', value, true));
        if (!value) {
            (this.firstListObj as ListViewComponent).dataSource = this.firstListData.slice();
        } else {
            (this.firstListObj as ListViewComponent | any).dataSource = data;
        }
    }
    //Here, filtering is handled using the dataManager for the second list
     onSecondKeyUp(e: any) {
        let value =this.textEle.nativeElement.value;
        let data = new DataManager(this.secondListData).executeLocal(new Query().where('text', 'startswith', value, true));
        if (!value) {
            (this.secondListObj as ListViewComponent).dataSource = this.secondListData.slice();
        } else {
            (this.secondListObj as ListViewComponent | any).dataSource = data;
        }
    }

    //Here, the state of the button is changed
    setButtonState() {
        if ((this.firstListObj as ListViewComponent | any).dataSource.length) {
            (this.firstBtnObj as ButtonComponent).disabled = false;
        } else {
            (this.firstBtnObj as ButtonComponent).disabled = true;
            (this.secondBtnObj as ButtonComponent).disabled = true;
        }

        if ((this.secondListObj as ListViewComponent | any).dataSource.length) {
            (this.fourthBtnObj as ButtonComponent).disabled = false;
        } else {
            (this.fourthBtnObj as ButtonComponent).disabled = true;
            (this.thirdBtnObj as ButtonComponent).disabled = true;
        }

    }
}


