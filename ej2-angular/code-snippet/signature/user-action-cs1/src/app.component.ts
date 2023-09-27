

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { SignatureComponent } from '@syncfusion/ej2-angular-inputs';
import { Button, ChangeEventArgs } from '@syncfusion/ej2-buttons';
import { getComponent } from '@syncfusion/ej2-base';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div id="option">
            <table>
                <tr>
                    <td>
                        <button ejs-button id="undo" #undo cssClass="e-primary" (click)="onUndo()" disabled={true}>UNDO</button>
                    </td><td>
                        <button ejs-button id="redo" #redo cssClass="e-primary" (click)="onRedo()" disabled={true}>REDO</button>
                    </td><td>
                        <button ejs-button id="clear" #clear cssClass="e-primary" (click)="onClear()" disabled={true}>CLEAR</button>
                    </td><td>
                        <div id="checkbox1"><ejs-checkbox label="Disable" (change)="onDisableChange($event)"></ejs-checkbox></div>
                        <div id="checkbox1"><ejs-checkbox label="ReadOnly" (change)="onReadOnlyChange($event)"></ejs-checkbox></div>
                    </td>
                </tr>
            </table>
        </div>
        <div id ="signature-control">
           <canvas ejs-signature #signature id="signature" (change)="change()"></canvas>
        </div>`
})
export class AppComponent {
    @ViewChild('signature')
    public signature?: SignatureComponent;
    onUndo(): void {
        if (!this.signature.disabled && !this.signature.isReadOnly) {
            this.signature.undo();
        }
    }
    onRedo(): void {
        if (!this.signature.disabled && !this.signature.isReadOnly) {
            this.signature.redo();
        }
    }
    onClear(): void {
        if (!this.signature.disabled && !this.signature.isReadOnly) {
            this.signature.clear();
        }
    }
    onDisableChange(args: ChangeEventArgs): void {
        this.signature.disabled = args.checked;
    }
    onReadOnlyChange(args: ChangeEventArgs): void {
        this.signature.isReadOnly = args.checked;
    }
    change(): void {
        let undoButton: Button = getComponent(document.getElementById("undo"), 'btn');
        let redoButton: Button = getComponent(document.getElementById("redo"), 'btn');
        let clearButton: Button = getComponent(document.getElementById("clear"), 'btn');
        if (!this.signature.disabled && !this.signature.isReadOnly) {
            if (this.signature.canUndo()) {
                undoButton.disabled = false;
            } else {
                undoButton.disabled = true;
            }
            if (this.signature.canRedo()) {
                redoButton.disabled = false;
            } else {
                redoButton.disabled = true;
            }
            if (!this.signature.isEmpty()) {
                clearButton.disabled = false;
            } else {
                clearButton.disabled = true;
            }
        }
    }
}



