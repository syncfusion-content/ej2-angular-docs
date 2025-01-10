import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Component, ViewChild, ElementRef } from '@angular/core';
import { SliderComponent, SliderModule, SliderTickEventArgs, SliderTooltipEventArgs } from '@syncfusion/ej2-angular-inputs';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

/**
 * Default sample
 */

@Component({
    imports: [
        SliderModule
    ],
    standalone: true,
    selector: 'my-app',
    template: `
    <button ejs-button #button (click)="Click()" id="element">Button</button>
    <div id='container'>
    <div #wrapDiv id="wrap">
            <ejs-slider #slider id='slider' [min]="min" [max]="max" [value]="value" [tooltip]="tooltipData" [ticks]="ticksData" [showButtons]=true [step]="step"
                (tooltipChange)='tooltipChangeHandler($event)' (renderingTicks)='renderingTicksHandler($event)'></ejs-slider>
        </div>
    </div>`,
})

export class AppComponent {
    @ViewChild('button')
    public clear: ButtonComponent | any;
    @ViewChild('slider')
    public slider: SliderComponent | any;
    @ViewChild('wrapDiv')
    public wrapDiv!: ElementRef;

    public tooltipData: Object = { placement: 'Before', isVisible: true };
    public ticksData: Object = { placement: 'After', largeStep: 2 * 3600000 };
    public min: number = new Date(2013, 6, 13, 11).getTime();
    public max: number = new Date(2013, 6, 13, 17).getTime();
    public step: number = 3600000;
    public value: number = new Date(2013, 6, 13, 13).getTime();

    tooltipChangeHandler(args: SliderTooltipEventArgs): void {
        let totalMilliSeconds = Number(args.text);
        let custom: any = { hour: '2-digit', minute: '2-digit' };
        args.text = new Date(totalMilliSeconds).toLocaleTimeString("en-us", custom);
    }

    renderingTicksHandler(args: SliderTickEventArgs): void {
        let totalMilliSeconds = Number(args.value);
        let custom: any = { hour: '2-digit', minute: '2-digit' };
        args.text = new Date(totalMilliSeconds).toLocaleTimeString("en-us", custom);
    }
    Click() {
        this.wrapDiv.nativeElement.style.display = 'block';
        this.slider.refresh();
    }
}

