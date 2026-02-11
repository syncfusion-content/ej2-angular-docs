import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor'
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditorComponent  } from '@syncfusion/ej2-angular-richtexteditor';

declare global {
    interface Window {
        embedly?: any;
    }
}

@Component({
  imports: [
    RichTextEditorAllModule
  ],
  standalone: true,
    selector: 'app-root',
    template: `<ejs-richtexteditor #sample [toolbarSettings]='toolbarSettings' [value]="value"  (actionComplete)='actionComplete($event)'></ejs-richtexteditor>`,
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService ]
})

export class App implements AfterViewInit {
    @ViewChild('sample') public rteObj?: RichTextEditorComponent;
    public toolbarSettings: Object = {
        items: ['createLink']
    };
    public actionComplete(args: any): void {
        if (<String>args.requestType === 'Links') {
            const rteContent = document.querySelector('.e-rte-content');
            if (!rteContent) {
                return;
            }
            const links = rteContent.querySelectorAll('a');
            links.forEach(link => {
                if (!link.closest('.embedly-card')) {
                    const blockquote = document.createElement('blockquote');
                    blockquote.className = 'embedly-card';
                    const anchor = document.createElement('a');
                    anchor.href = link.href;
                    anchor.textContent = link.textContent || link.href;
                    blockquote.appendChild(anchor);
                    blockquote.appendChild(document.createElement('p'));
                    link.parentNode?.replaceChild(blockquote, link);
                }
            });
            if (window.embedly && window.embedly.lib) {
                window.embedly.lib.process(rteContent);
            }
        }
    }

    // Run embedly processing once component view has been initialized
    public ngAfterViewInit(): void {
        if (window.embedly && window.embedly.lib) {
            window.embedly.lib.process(document.body);
        }
    }

    public value:string = `<p>The Syncfudion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
      <li>
          <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
      </li>
      <li>
          <p>Bulleted and numbered lists.</p>
      </li>
      <li>
          <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
      </li>
      <li>
          <p>Contains undo/redo manager. </p>
      </li>
    </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"><img alt="Sky with sun" src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png" width="309" style="min-width: 10px; min-height: 10px; width: 309px; height: 174px;" class="e-rte-image e-imginline e-rte-drag-image" height="174" /></div>  `;
}