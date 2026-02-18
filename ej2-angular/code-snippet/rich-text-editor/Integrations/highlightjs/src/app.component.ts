import { RichTextEditorComponent, RichTextEditorModule, ToolbarSettingsModel } from '@syncfusion/ej2-angular-richtexteditor';
import { Component, ViewChild } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, CodeBlockService } from '@syncfusion/ej2-angular-richtexteditor';
import highlight from 'highlight.js/lib/common';

@Component({
  imports: [RichTextEditorModule],
  standalone: true,
  selector: 'app-root',
  styleUrl: 'app.css',
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-richtexteditor
      #rte
      [value]="initialHtml"
      [toolbarSettings]='tools'
      (created)="onCreated()"
      (change)="onChange()"
    ></ejs-richtexteditor>
  `,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, QuickToolbarService, CodeBlockService],
})
export class App {
  @ViewChild('rte')
  public rte: RichTextEditorComponent | undefined;
  public tools: ToolbarSettingsModel = {
    items: ['Undo', 'Redo', '|', 'CodeBlock', '|', 'InsertCode', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'BulletFormatList', 'NumberFormatList', '|', 'Formats', 'Alignments', '|', 'Outdent', 'Indent', '|',
      'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'SourceCode']
  };
  public initialHtml = `
<p>Welcome! Here are some preloaded code blocks:</p>
<p><strong>No language class</strong> (auto-detect):</p>
<pre><code>
  SELECT id, name FROM users WHERE active = 1;
</code></pre>
<p><strong>Language class (TypeScript)</strong>:</p>
<pre data-language="Typescript" spellcheck="false"><code class="language-typescript">
export function hello(name: string) {
  console.log('Hello ' + name);
}
</code></pre>
<p><strong>Language class (Python)</strong>:</p>
<pre data-language="Python" spellcheck="false"><code class="language-python">
def sum(a, b):
  return a + b
</code></pre>
<pre data-language="C++" spellcheck="false"><code class="language-cpp">
#include <iostream>
using namespace std;
int main() {
    cout << "Hello from C++!" << endl;
    int a = 10;
    int b = 20;
    int sum = a + b;
    cout << "Sum = " << sum << endl;
    return 0;
}
</code></pre>
  `;

  onCreated() {
    // Highlight existing code blocks at startup
    this.highlightAllCodeBlocks();
  }

  onChange() {
    this.highlightAllCodeBlocks();
  }

  private highlightAllCodeBlocks() {
    const container: HTMLElement = this.rte!.element.querySelector('.e-rte-content') as HTMLElement;
    if (!container) { return; }
    const blocks: NodeListOf<Element> = container.querySelectorAll('pre code');
    blocks.forEach((block: Element) => {
      if (!block.classList.contains('hljs')) {
        highlight.highlightElement(block as HTMLElement);
      }
    });
  }
}
