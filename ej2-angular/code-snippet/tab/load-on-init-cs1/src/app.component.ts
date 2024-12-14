import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { Component, ViewChild } from '@angular/core';
import { TabModule, TabComponent } from '@syncfusion/ej2-angular-navigations';
import { TextBoxModule, TextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
/**
 * Adaptive Tab Component
 */

@Component({
imports: [ FormsModule, TabModule, TextBoxModule, ButtonModule],
standalone: true,
    selector: 'app-container',
    // specifies the template url path
    template: ` <div class="control-section e-tab-section">
    <div class="e-sample-resize-container">
        <!-- Render the Tab Component -->
        <ejs-tab #tabObj loadOn="Init" [selectedItem]="selectedItem">
            <e-tabitems>
                <e-tabitem [header]="headerText[0]">
                    <ng-template #content>
                      <div class="login-form">
                        <div class="wrap">
                          <div id="input-container">
                          <ejs-textbox #userObj floatLabelType="Auto" placeholder="Username"></ejs-textbox>
                          <br /><br />
                          <ejs-textbox #passwordObj floatLabelType="Auto"  placeholder="Password"></ejs-textbox>
                          </div>
                        </div>
                        <br />
                        <div class="button-container">
                          <button ejs-button [isPrimary]="true" (click)="handleSignIn()">Sign In</button>
                          <button ejs-button [isPrimary]="true" (click)="handleSkip()">Skip In</button>
                        </div>
                      </div>
                    </ng-template>
                </e-tabitem>
                <e-tabitem [header]="headerText[1]">
                    <ng-template #content>
                      <div class="over-view">
                        <p>
                          You can check out our Syncfusion Ej2 demo
                          <a href="https://ej2.syncfusion.com/demos/" target="_blank" rel="noopener noreferrer">
                            here
                          </a>.
                        </p>
                        <br />
                        <p>
                          The user guide is available
                          <a href="https://ej2.syncfusion.com/documentation/introduction" target="_blank" rel="noopener noreferrer">
                            here
                          </a>.
                        </p>
                    </div>
                    </ng-template>
                </e-tabitem>
                <e-tabitem [header]="headerText[2]">
                  <ng-template #content>
                    <div class="feed-back">
                      <div class="wrap">
                        <div id="input-container">
                        <ejs-textbox floatLabelType="Auto" #nameObj placeholder="User Name"></ejs-textbox>
                          <br /><br />
                          <ejs-textbox  floatLabelType="Auto"  placeholder="Email"></ejs-textbox>
                          <br /><br />
                          <ejs-textbox floatLabelType="Auto" placeholder="Comments"></ejs-textbox>
                        </div>
                      </div>
                      <br />
                      <div class="button-container">
                       <button ejs-button :isPrimary="true" (click)="handleSubmit()">Submit</button>
                      </div>
                    </div>
                  </ng-template>
              </e-tabitem>
            </e-tabitems>
        </ejs-tab>
    </div>
</div>`
    })
export class AppComponent {
    @ViewChild('tabObj')  public tabObj!: TabComponent;
    @ViewChild('userObj')  public userObj!: TextBoxComponent;
    @ViewChild('passwordObj') public passwordObj!: TextBoxComponent;
    @ViewChild('nameObj')  public nameObj!: TextBoxComponent;
    public selectedItem: number = 0;
    public headerText: Object[] = [{ text: "Login" }, { text: "Syncfusion EJ2" }, { text: "FeedBack" }];
    public handleSignIn(): void {
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
            this.selectedItem = 1;
        }
        this.nameObj.value = userName
    }
    public handleSkip = () => {
        this.selectedItem = 1;
    }
    public handleSubmit =  () =>  {
        this.userObj.value = '';
        this.passwordObj.value = '';
        this.nameObj.value  = '';
        this.selectedItem = 0;
    }
}



