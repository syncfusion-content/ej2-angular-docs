import { DiagramModule, ImportAndExportVisio, DiagramComponent, Diagram, IImportingEventArgs } from '@syncfusion/ej2-angular-diagrams';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Uploader } from '@syncfusion/ej2-inputs';

Diagram.Inject(ImportAndExportVisio);

@Component({
    imports: [DiagramModule],
    providers: [],
    standalone: true,
    selector: 'app-container',
    template: `
    <div> <input id="fileupload" type="file" accept=".vsdx"/>
    <ejs-diagram #diagram id="diagram" width="100%" height="700px" (diagramImporting)="diagramImporting($event)">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
    @ViewChild('diagram')
    public diagram!: DiagramComponent;
    public uploadObject: Uploader;

    constructor() {
        this.uploadObject = new Uploader({
            asyncSettings: {
                saveUrl:
                    'https://services.syncfusion.com/js/production/api/FileUploader/Save',
                removeUrl:
                    'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
            },
            success: this.onUploadSuccess.bind(this),
        });
    };

    ngAfterViewInit() {
        this.uploadObject.appendTo('#fileupload');
    };

    public diagramImporting(args: IImportingEventArgs): void {
        if (args.status === 'started') {
            // Import has started: show a loader / disable UI
        } else if (args.status === 'completed') {
            // Import completed: hide loader / enable UI
        } else if (args.status === 'failed') {
            console.error('Visio import failed.', args);
        }
    };

    async onUploadSuccess(args: any) {
        let file = args.file;
        let rawFile = file.rawFile;
        const warnings = await this.diagram.importFromVisio(rawFile, { pageIndex: 0 });
        if (warnings.length) {
            for (var i = 0; i < warnings.length - 1; i++) {
                console.warn(warnings[i]);
            }
        }
    };
}