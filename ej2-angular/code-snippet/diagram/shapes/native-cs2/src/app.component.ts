import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { HtmlModel, NativeModel } from '@syncfusion/ej2-diagrams';
import { DiagramModule, DiagramComponent } from '@syncfusion/ej2-angular-diagrams';

@Component({
    imports: [DiagramModule],
    providers: [],
    standalone: true,
    selector: "app-container",
    template: `
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" >
        <e-nodes>
            <e-node id='node1' [offsetX]=150 [offsetY]=150 [width]=100 [height]=100 [shape]='shape1'></e-node>
            <e-node id='node2' [offsetX]=350 [offsetY]=150 [width]=100 [height]=100 [shape]='shape2'></e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    @ViewChild('diagram')
    public diagram?: DiagramComponent;

    public shape1: NativeModel = {
        content: this.template('node1'),
        type: 'Native',
        scale: 'Stretch'
    };

    public shape2: NativeModel = {
        content: this.template('node2'),
        type: 'Native',
        scale: 'Stretch'
    };

    // Template for the SVG Shapes.
    public template(obj: any): string {
        if (obj === 'node1') {
            return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="#007BFF" />
                        <path d="M6.5 7.5L17.5 16.5L12 21V3L17.5 7.5L6.5 16.5" fill="none" stroke="white" stroke-width="2" />
                    </svg>`;
        }
        else {
            return `<svg width="200" height="200">
                        <path d="M 13.69 3.77 C 13.69 3.77 12.22 0.03 16.83 0 C 16.83 0 19.9 0.13 19 4.32 C 18.99 4.36 18.98 4.41 18.97 4.45 C 17.98 8.77 15.87 12.87 15.04 15.03 H 19.85 C 19.85 15.03 21.06 19.61 16.71 20 H 2.42 C 2.42 20 -1.39 18.58 0.55 14.68 L 4.24 3.84 H 0.63 C 0.63 3.84 -0.76 0.94 2.74 0.03 L 16.79 0 L 15.9 0.36 L 14.43 2.08 L 13.69 3.77 Z M 13.64 1.33 C 13.64 1.33 13.34 1.81 13.3 2.31 H 2.1 C 2.1 2.31 2.03 1.44 2.98 1.27 L 13.64 1.33 Z M 18.48 16.47 C 18.48 16.47 18.32 19.15 15.74 18.34 C 15.74 18.34 14.72 17.77 14.8 16.48 L 18.48 16.47 Z M 14.25 3.74 C 14.25 3.74 15.05 3.48 15.12 2.24 C 15.12 2.24 15.3 1.1 16.95 1.55 C 16.95 1.55 17.94 1.9 17.26 3.95 C 17.26 3.95 14.52 12.45 13.53 14.29 C 13.53 14.29 12.22 16.94 13.65 18.52 H 3.09 C 3.09 18.52 0.87 18.07 2.18 14.9 C 2.18 14.9 5.79 5.36 6.11 3.74 L 14.25 3.74 Z" visibility="visible" opacity="1" fill="skyblue" stroke="black" stroke-width="1" stroke-dasharray="none"></path>
                    </svg>`;
        };
    };
};