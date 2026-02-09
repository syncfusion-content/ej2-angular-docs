import { DiagramModule, ImportAndExportVisio, DiagramComponent, Diagram, IExportingEventArgs,NodeModel, ConnectorModel,VisioExportOptions } from '@syncfusion/ej2-angular-diagrams';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

Diagram.Inject(ImportAndExportVisio);

@Component({
    imports: [DiagramModule],
    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `
    <button (click)="export()">Export</button>
    <ejs-diagram #diagram id="diagram" width="100%" height="700px" [nodes]='nodes' [connectors]='connectors' (diagramExporting)="diagramExporting($event)">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram!: DiagramComponent;
    public nodes: NodeModel[] = [
        {
            id: 'Start',
            width: 100,
            height: 100,
            offsetX: 300,
            offsetY: 200,
            annotations: [
                {
                    content: 'Start',
                }
            ],
            ports: [{
                id: 'port1',
                offset: {
                    x: 1,
                    y: 0.5
                }
            }],
            style: { fill: '#2AA8D9', strokeColor: 'grey' }
        },
        {
            id: 'End',
            width: 100,
            height: 100,
            offsetX: 600,
            offsetY: 200,
            annotations: [
                {
                    content: 'End',

                }
            ],
            style: { fill: '#2AA8D9', strokeColor: 'grey' }
        }
    ];
    public connectors: ConnectorModel[] = [
        {
            id: 'connector1',
            sourceID: 'Start',
            sourcePortID: 'port1',
            targetID: 'End',
            annotations: [
                {
                    content: 'Connect',
                    alignment: 'Before',
                    displacement: { y: 10 },
                }
            ]
        }
    ];

    public diagramExporting(args: IExportingEventArgs): void {
        if (args.status === 'started') {
            // Export has started: show a loader / disable UI
        } else if (args.status === 'completed') {
            // Export completed: hide loader / enable UI
        } else if (args.status === 'failed') {
            console.error('Visio export failed.', args);
        }
    };

    export() {
        let exportOptions: VisioExportOptions = {};
        exportOptions.fileName = 'diagram1.vsdx';
        exportOptions.pageName = 'page1';
        this.diagram.exportToVisio(exportOptions);
    };
}