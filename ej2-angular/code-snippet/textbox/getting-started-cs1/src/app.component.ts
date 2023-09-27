

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">

                <h4> TextBox with icons </h4>

                <div class="e-input-group">
                    <input class="e-input" type="text" (focus)="focusIn($event.target)"
                    placeholder = "Enter Date" (blur)="focusOut($event.target)"/>
                    <span class="e-input-group-icon e-input-popup-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
                </div>

                <div class="e-input-group e-float-icon-left">
                    <span class="e-input-group-icon e-input-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
                    <div class="e-input-in-wrap">
                        <input class="e-input" type="text" (focus)="focusIn($event.target)"
                        placeholder = "Enter Date" (blur)="focusOut($event.target)"/>
                    </div>
                </div>

                <div class="e-input-group e-float-icon-left">
                    <span class="e-input-group-icon e-input-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
                    <div class="e-input-in-wrap">
                        <input class="e-input" type="text" (focus)="focusIn($event.target)"
                        placeholder = "Enter Date" (blur)="focusOut($event.target)"/>
                        <span class="e-input-group-icon e-input-down" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
                    </div>
                </div>

                <h4> Floating label with icons </h4>

                <div class="e-float-input e-input-group">
                    <input type="text" required (focus)="focusIn($event.target)" (blur)="focusOut($event.target)">
                    <span class="e-float-line"></span>
                    <label class="e-float-text" >Enter Date</label>
                    <span class="e-input-group-icon e-input-popup-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
                </div>

                <div class="e-float-input e-input-group e-float-icon-left">
                    <span class="e-input-group-icon e-input-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
                    <div class="e-input-in-wrap">
                        <input type="text" required (focus)="focusIn($event.target)" (blur)="focusOut($event.target)">
                        <span class="e-float-line"></span>
                        <label class="e-float-text" >Enter Date</label>
                    </div>
                </div>

                <div class="e-float-input e-input-group e-float-icon-left">
                    <span class="e-input-group-icon e-input-date" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
                    <div class="e-input-in-wrap">
                        <input type="text" required (focus)="focusIn($event.target)" (blur)="focusOut($event.target)">
                        <span class="e-float-line"></span>
                        <label class="e-float-text" >Enter Date</label>
                        <span class="e-input-group-icon e-input-down" (mouseup)="onMouseUp($event.target)" (mousedown)="onMouseDown($event.target)"></span>
                    </div>
                </div>
              </div>`
})

export class AppComponent {
    public focusIn(target: any): void {
        let parent: HTMLElement = target.parentElement as HTMLElement;
        if (parent.classList.contains('e-input-in-wrap')) {
            (parent.parentElement as HTMLElement).classList.add('e-input-focus');
        } else {
            parent.classList.add('e-input-focus');
        }
    }

    public focusOut(target: any): void {
        let parent: HTMLElement = target.parentElement as HTMLElement;
        if (parent.classList.contains('e-input-in-wrap')) {
            (parent.parentElement as HTMLElement).classList.remove('e-input-focus');
        } else {
            parent.classList.remove('e-input-focus');
        }
    }

    public onMouseDown(target: any): void {
        target.classList.add('e-input-btn-ripple');
    }

    public onMouseUp(target: any): void {
        let ele: HTMLElement = target;
        setTimeout(
            () => {ele.classList.remove('e-input-btn-ripple'); 
        }, 500);
    }
 }


