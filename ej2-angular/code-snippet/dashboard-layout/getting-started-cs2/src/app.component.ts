

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    styleUrls: ['./default-style.css'],
    template: `
    <div class="control-section">
        <ejs-dashboardlayout id='defaultLayout' #defaultLayout [columns]="5" [cellSpacing]='cellSpacing'>
            <div id="one" class="e-panel" data-row="0" data-col="0" data-sizeX="1" data-sizeY="1">
                <span id="close" class="e-template-icon e-clear-icon"></span>
                <div class="e-panel-container">
                    <div class="text-align">0</div>
                </div>
            </div>
            <div id="two" class="e-panel" data-row="1" data-col="0" data-sizeX="1" data-sizeY="2">
                <span id="close" class="e-template-icon e-clear-icon"></span>
                <div class="e-panel-container">
                    <div class="text-align">1</div>
                </div>
            </div>
            <div id="three" class="e-panel" data-row="0" data-col="1" data-sizeX="2" data-sizeY="2">
                <span id="close" class="e-template-icon e-clear-icon"></span>
                <div class="e-panel-container">
                    <div class="text-align">2</div>
                </div>
            </div>
            <div id="four" class="e-panel" data-row="2" data-col="1" data-sizeX="1" data-sizeY="1">
                <span id="close" class="e-template-icon e-clear-icon"></span>
                <div class="e-panel-container">
                    <div class="text-align">3</div>
                </div>
            </div>
            <div id="five" class="e-panel" data-row="2" data-col="2" data-sizeX="2" data-sizeY="1">
                <span id="close" class="e-template-icon e-clear-icon"></span>
                <div class="e-panel-container">
                    <div class="text-align">4</div>
                </div>
            </div>
            <div id="six" class="e-panel" data-row="0" data-col="3" data-sizeX="1" data-sizeY="1">
                <span id="close" class="e-template-icon e-clear-icon"></span>
                <div class="e-panel-container">
                    <div class="text-align">5</div>
                </div>
            </div>
            <div id="seven" class="e-panel" data-row="1" data-col="3" data-sizeX="1" data-sizeY="1">
                <span id="close" class="e-template-icon e-clear-icon"></span>
                <div class="e-panel-container">
                    <div class="text-align">6</div>
                </div>
            </div>
            <div id="eight" class="e-panel" data-row="0" data-col="4" data-sizeX="1" data-sizeY="3">
                <span id="close" class="e-template-icon e-clear-icon"></span>
                <div class="e-panel-container">
                    <div class="text-align">7</div>
                </div>
            </div>
        </ejs-dashboardlayout>
    </div>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    public cellSpacing: number[] = [10, 10];
}


