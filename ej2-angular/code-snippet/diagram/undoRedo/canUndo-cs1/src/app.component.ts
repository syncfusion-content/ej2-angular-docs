import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, Diagram, UndoRedoService } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ UndoRedoService],
standalone: true,
    selector: "app-container",
    template: `
    <div class="button">
        <button id="undo" disabled (click)='onClickUndo($event)'>Undo</button>
        <button id="redo" disabled (click)='onClickRedo($event)'>Redo</button>
    </div>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" (historyChange)="historyChange()">
        <e-nodes>
            <e-node id='node1' [offsetX]=250 [offsetY]=250 [width]=100 [height]=100>
                <e-node-annotations>
                    <e-node-annotation id="label1" content="Annotation">
                    </e-node-annotation>
                </e-node-annotations>
            </e-node>
        </e-nodes>
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    onClickUndo = (args: MouseEvent) => {
        (this.diagram as Diagram).undo()
    }
    onClickRedo = (args: MouseEvent) => {
        (this.diagram as Diagram).redo()
    }
    public historyChange(): void {
        (document.getElementById('undo') as HTMLButtonElement).disabled = !(this.diagram as Diagram).historyManager.canUndo;
        (document.getElementById('redo') as HTMLButtonElement).disabled = !(this.diagram as Diagram).historyManager.canRedo;
    }
}


