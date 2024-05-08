import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SwitchModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'




import { Component, OnInit } from '@angular/core';
import { rippleMouseHandler } from '@syncfusion/ej2-buttons';

@Component({
imports: [
        
        SwitchModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <div id='container'>
                    <table class="ripple">
                        <tr>
                            <td class="lRipple"><label for='switch1'>USB Tethering</label></td>
                        <td>
                            <ejs-switch id="switch1" [checked]="true"></ejs-switch>
                        </td>
                        </tr>
                    </table>
                </div>
            </div>`

})

export class AppComponent implements OnInit {
    parentElement: any;
    ngOnInit(): void {
        const rippleHandler = (e: MouseEvent): void =>  {
            let rippleSpan: Element = this.parentElement.nextElementSibling.querySelector('.e-ripple-container') as Element;
            if (rippleSpan) {
                rippleMouseHandler(e, rippleSpan);
            }
        }
                (document as any).querySelector('.lRipple label')!.addEventListener('mouseup', rippleHandler);
                (document as any).querySelector('.lRipple label')!.addEventListener('mousedown', rippleHandler);

            }
    }


