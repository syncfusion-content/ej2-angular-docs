import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { Component, ViewChild } from '@angular/core';
import { TabModule, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { TextBoxModule, TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { GridModule } from '@syncfusion/ej2-angular-grids';
/**
 * Adaptive Tab Component
 */

@Component({
imports: [ FormsModule, TabModule, TextBoxModule, ButtonModule, GridModule],
standalone: true,
    selector: 'app-container',
    // specifies the template url path
    template: ` <<div class="control-section e-tab-section">
    <div class="e-sample-resize-container">
        <!-- Render the Tab Component -->
        <ejs-tab #tabObj loadOn="Dynamic">
            <e-tabitems>
                <e-tabitem [header]="headerText[0]" [disabled]="loginDisabled">
                    <ng-template #content>
                    <div class="login-form">
                    <div class="wrap">
                      <div id="heading">Sign in to view the Grid</div>
                      <br />
                      <div id="input-container">
                      <ejs-textbox  #userObj floatLabelType="Auto"  placeholder="Username"></ejs-textbox>
                      <br /><br />
                      <ejs-textbox  #passwordObj floatLabelType="Auto" placeholder="Password"></ejs-textbox>
                      </div>
                    </div>
                    <br />
                    <div class="button-container">
                      <button ejs-button [isPrimary]="true" (click)="handleSubmit()">sign In</button>
                    </div>
                  </div>
                    </ng-template>
                </e-tabitem>
                <e-tabitem [header]="headerText[1]"  [disabled]="gridDisabled">
                    <ng-template #content>
                        <ejs-grid   id='overviewgrid' [dataSource]='gridData'>
                            <e-columns> 
                              <e-column field="OrderID" headerText="Order ID" width="120" ></e-column>
                              <e-column field="CustomerID" headerText="Customer Name" width="130" ></e-column>
                              <e-column field="OrderDate" headerText="Order Date" width="120" format="yMd"></e-column>
                              <e-column field="Freight" headerText="Freight" width="120" format="C2"></e-column>
                            </e-columns>
                          </ejs-grid>
                    </ng-template>
                </e-tabitem>
            </e-tabitems>
        </ejs-tab>
    </div>
</div>`
    })
export class AppComponent {
    @ViewChild('tabObj') public tabObj!: TabComponent;
    @ViewChild('userObj') public userObj!: TextBoxComponent;
    @ViewChild('passwordObj') public passwordObj!: TextBoxComponent;
    public loginDisabled: Boolean = false;
    public gridDisabled: Boolean = true;
    public headerText: Object [] = [{ text: "Login" }, { text: "Grid" }];
    public gridData: object [] = [
        { OrderID: 10248, CustomerID: "ALFKI", OrderDate: "2024-12-01", Freight: 32.38 },
        { OrderID: 10249, CustomerID: "ANATR", OrderDate: "2024-12-02", Freight: 11.61 },
        { OrderID: 10250, CustomerID: "ANTON", OrderDate: "2024-12-03", Freight: 65.83 },
        { OrderID: 10251, CustomerID: "AROUT", OrderDate: "2024-12-04", Freight: 41.34 }
    ];
    public handleSubmit(): void {
        const userName = this.userObj.value;
        const password = this.passwordObj.value;
        if (!userName && !password) {
            window.alert("Enter both username and password");
        } else if (!userName) {
            window.alert("Enter the username");
        } else if (!password) {
            window.alert("Enter the password");
        } else if (userName.length < 4) {
            window.alert("Username must be at least 4 characters long");
        } else {
            this.userObj.value = "";
            this.passwordObj.value = "";
            this.tabObj.items[0].disabled = true;
            this.tabObj.items[1].disabled = false;
            this.tabObj.dataBind();
            this.tabObj.select(1);
        }
    }
}



