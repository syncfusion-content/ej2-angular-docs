import { ViewChild, Component, ViewEncapsulation  } from '@angular/core';
import { DiagramComponent, DiagramModule } from '@syncfusion/ej2-angular-diagrams';
import { Uploader, FileInfo } from '@syncfusion/ej2-inputs';
import { NodeModel } from '@syncfusion/ej2-diagrams';

@Component({
  imports: [DiagramModule],

  providers: [],
  standalone: true,
  selector: 'app-container',
  template: ` <div> <input id="fileupload" type="file" />
  <button (click)="onSaveClick()">Save Diagram</button> </div>
  <ejs-diagram #diagram id="diagram" width="100%" height="600px" [nodes]="nodes" > </ejs-diagram>`,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild("diagram")
  public diagram!: DiagramComponent;
  public uploadObject: Uploader;
  public nodes: NodeModel[] = [];
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
  }
  ngOnInit() {
    // Initialize nodes
    this.nodes = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 50,
      annotations: [{ id: 'label1', content: 'Start' }],
      shape: { type: 'Flow', shape: 'Terminator' },
    },
  ];
}

  ngAfterViewInit() {
    this.uploadObject.appendTo('#fileupload');
  }

  onUploadSuccess(args: { file: FileInfo }) {
    const file: any = args.file.rawFile;
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = this.loadDiagram.bind(this);
  }

  loadDiagram(event: ProgressEvent<FileReader>) {
    const jsonString = event.target?.result as string;
    this.diagram.loadDiagram(jsonString);
  }

  download(data: string): void {
    if ((window.navigator as any).msSaveBlob) {
      const blob: any = new Blob([data], {
        type: 'data:text/json;charset=utf-8,',
      });
      (window.navigator as any).msSaveBlob(blob, 'Diagram.json');
    } else {
      const dataStr: string =
        'data:text/json;charset=utf-8,' + encodeURIComponent(data);
      const a: HTMLAnchorElement = document.createElement('a');
      a.href = dataStr;
      a.download = 'Diagram.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }

  onSaveClick() {
    this.download(this.diagram.saveDiagram());
  }
}
