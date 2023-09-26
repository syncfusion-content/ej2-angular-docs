import { Component, ViewChild } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <div id='sample_container'>
        <div id='container'>
          <div class='row' style="padding-top: 20px" id= "toast_pos_target">
            <div id="toast_pos"> </div>
            <div id="toast_pos_property">
                <table style="width: 100%">
                    <tr>
                        <td>
                            <div style='padding:25px 0 0 0;'>
                                <ejs-radiobutton (change)="positionChange($event)" label="Position" name="position" value="position" checked="true"></ejs-radiobutton>
                            </div>
                        </td>
                        <td>
                            <div style='padding:25px 0 0 0;'>
                                <ejs-radiobutton (change)="customePosition($event)" label="Custom" name="position" value="position"></ejs-radiobutton>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td id="dropdownChoose" colspan="2">
                            <div id="dropdown" style='padding-top:25px;'>
<ejs-dropdownlist #dropDown (change)="dropDownChange($event)"  [dataSource]='dropdownDB' index='4'>
            </ejs-dropdownlist>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" id="customChoose" style="display: none">
                            <form id="formId" class="form-horizontal">
                                <div class='e-row'>
                                    <div class="e-float-input">
                                        <input class="e-input" id="xPos" name="Digits" value=50 digits="true" data-digits-message="Please enter digits only." required="">
                                        <span class="e-float-line"></span>
                                        <label class="e-float-text" for="Digits">X Position</label>
                                    </div>
                                </div>
                                <div class='e-row'>
                                    <div class="e-float-input">
                                        <input class="e-input" id="yPos" name="Digits" value=50 digits="true" data-digits-message="Please enter digits only." required="">
                                        <span class="e-float-line"></span>
                                        <label class="e-float-text" for="Digits">Y Position</label>
                                    </div>
                                </div>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div style='padding:25px 0 0 0;'>
                                <ejs-radiobutton (change)="targetChange($event)" label="Target" name="target" value="Bottom"></ejs-radiobutton>
                            </div>
                        </td>
                        <td>
                            <div style='padding:25px 0 0 0;'>
                                <ejs-radiobutton (change)="globalTargetChange($event)" label="Global" name="target" value="Bottom" checked="true"></ejs-radiobutton>
                            </div>
                        </td>
                    </tr>
                </table>
                <div id="toast_btn" style="padding-top: 25px">
                  <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
                </div>
            </div>
        </div>
        </div></div>

        <ejs-toast #element (created)="onCreate($event)"  [position] = 'position' >
              <ng-template #title>
                  <div>Matt sent you a friend request</div>
              </ng-template>
              <ng-template #content>
                  <div>Hey, wanna dress up as wizards and ride our hoverboards?</div>
              </ng-template>
            </ejs-toast>
        `
})

export class AppComponent {
    @ViewChild('element') toastObj?: ToastComponent;
    @ViewChild('dropDown') dropDownList?: DropDownList;

    public position = { X: 'Right', Y: 'Bottom' };
    public dropdownDB = ['Top Left', 'Top Right', 'Top Center', 'Bottom Left', 'Bottom Right', 'Bottom Center' ];
    public customFlag = false;

    onCreate(args: any) {
      this.toastShow();
    }
    btnClick(args: any) {
    if (this.customFlag) {
        this.setcustomPosValue();
    }
    this.toastObj?.hide('All');
    this.toastShow();
    }

    positionChange(e: any) {
      if (e.event.target.checked) {
        this.toastObj?.hide('All');
        (document.getElementById('dropdownChoose') as HTMLElement).style.display = 'table-cell';
        (document.getElementById('customChoose') as HTMLElement ).style.display = 'none';
        this.setToastPosValue((this.dropDownList as DropDownList).value.toString());
        this.customFlag = false;
        this.toastShow();
      }
    }

    customePosition(e: any) {
      if (e.event.target.checked) {
        this.toastObj?.hide('All');
        (document.getElementById('dropdownChoose') as HTMLElement ).style.display = 'none';
        (document.getElementById('customChoose') as HTMLElement).style.display = 'table-cell';
        this.setcustomPosValue();
        this.customFlag = true;
        this.toastShow();
      }
    }

    dropDownChange(e: any) {
    this.toastObj?.hide('All');
    this.setToastPosValue(e.value);
    this.toastShow();
    }
    globalTargetChange(e: any) {
      if (e.event.target.checked) {
        this.toastObj?.hide('All');
        this.toastObj!.target = document.body;
        this.toastShow();
      }
    }

    targetChange(e: any) {
      if (e.event.target.checked) {
        this.toastObj?.hide('All');
        this.toastObj!.target = '#toast_pos_target';
        this.toastShow();
      }
    }

     setcustomPosValue(): void {
    this.toastObj!.position.X = parseInt((<any>document.getElementById('xPos')).value, 10);
    this.toastObj!.position.Y = parseInt((<any>document.getElementById('yPos')).value, 10);
     }

 setToastPosValue(value: string): void {
    value = value.toLowerCase().replace(' ', '');
    let toastObj: ToastComponent = this.toastObj as ToastComponent;
    switch (value) {
        case 'topleft':
            toastObj.position.X = 'Left'; toastObj.position.Y = 'Top'; break;
        case 'topright':
            toastObj.position.X = 'Right'; toastObj.position.Y = 'Top'; break;
        case 'topcenter':
            toastObj.position.X = 'Center'; toastObj.position.Y = 'Top'; break;
        case 'topfullwidth':
            toastObj.width = '100%'; toastObj.position.X = 'Center'; toastObj.position.Y = 'Top'; break;
        case 'bottomleft':
            toastObj.position.X = 'Left'; toastObj.position.Y = 'Bottom'; break;
        case 'bottomright':
            toastObj.position.X = 'Right'; toastObj.position.Y = 'Bottom'; break;
        case 'bottomcenter':
            toastObj.position.X = 'Center'; toastObj.position.Y = 'Bottom'; break;
        case 'bottomfullwidth':
            toastObj.width = '100%'; toastObj.position.X = 'Center'; toastObj.position.Y = 'Bottom'; break;
    }
}

    toastShow() {
            setTimeout(
        () => {
            this.toastObj?.show();
        }, 700);
    }
}



