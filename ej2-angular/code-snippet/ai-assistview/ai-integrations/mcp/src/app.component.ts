import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AIAssistViewComponent, AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';
import { PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { Mention, MentionModule } from '@syncfusion/ej2-angular-dropdowns';
import { marked } from 'marked';

// Initialize AI AssistView component
@Component({
  standalone: true,
  imports: [AIAssistViewModule, MentionModule],
  selector: 'app-root',
  template: `
    <div ejs-aiassistview #aiassist (created)="onAssistCreated()" (promptRequest)="onPromptRequest($event)"
        [toolbarSettings]="toolbarSettings" (stopRespondingClick)="stopRespondingClick()">
    </div>
  `
})
export class AppComponent {
  @ViewChild('assist') aiAssistView!: AIAssistViewComponent;

  private stopStreaming: boolean = false;
  private sessionId: string = localStorage.getItem('assist_session') || (globalThis.crypto?.randomUUID?.() || String(Date.now()));
  private mention?: Mention;
  private textAreaEle: HTMLDivElement | null = null;

  constructor() {
    // Persist initial session id if it wasn't already stored
    if (!localStorage.getItem('assist_session')) {
      localStorage.setItem('assist_session', this.sessionId);
    }
  }

  private resetSession() {
    const prev = this.sessionId;
    this.sessionId = globalThis.crypto?.randomUUID?.() || String(Date.now());
    localStorage.setItem('assist_session', this.sessionId);
    if (prev) {
      fetch('http://localhost:3000/assist/clear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: prev })
      }).catch(() => { /* ignore */ });
    }
  }

  public toolbarSettings = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Prompts' }],
    itemClicked: () => {
      this.aiAssistView.prompts = [];
      this.stopStreaming = true;
      this.resetSession();
    }
  };

  public onAssistCreated = () => {
    this.textAreaEle = document.querySelector('.e-aiassistview [contenteditable="true"]');
    if (!this.textAreaEle) return;

    const files = [
      'src/main.ts',
      'src/app/app.ts',
      'src/app/app.html',
      'src/app/app.css',
      'src/styles.css'
    ];

    this.mention = new Mention({
      target: this.textAreaEle,
      showMentionChar: true,
      dataSource: files,
      change: () => {
          const inputEvent: Event = new Event('input', { bubbles: true });
          this.textAreaEle?.dispatchEvent(inputEvent);
      } });
    const mentionEle = document.createElement('div');
    document.body.appendChild(mentionEle);
    this.mention.appendTo(mentionEle);
  };

  public onPromptRequest = (args: PromptRequestEventArgs) => {
    fetch('http://localhost:3000/assist/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: this.sessionId,
        prompt: args.prompt,
        model: 'gpt-4o-mini',
        temperature: 0.2,
        max_tokens: 512
      })
    })
      .then(r => (r.ok ? r.json() : r.text().then(t => Promise.reject(new Error(t)))))
      .then(data => {
        const responseText = (data?.content || '').trim() || 'No response received.';
        this.stopStreaming = false;
        this.streamResponse(responseText);
      })
      .catch(() => {
        this.aiAssistView.addPromptResponse('⚠️ Failed to connect to server. Ensure MCP server is running at http://localhost:3000.', true);
        this.stopStreaming = true;
      });
  };

  public streamResponse = async (response: string) => {
    let lastResponse = '';
    const responseUpdateRate = 10;
    let i = 0;
    const responseLength = response.length;
    while (i < responseLength && !this.stopStreaming) {
      lastResponse += response[i];
      i++;
      if (i % responseUpdateRate === 0 || i === responseLength) {
        const htmlResponse = marked.parse(lastResponse);
        this.aiAssistView.addPromptResponse(htmlResponse, i === responseLength);
        this.aiAssistView.scrollToBottom();
      }
      await new Promise(resolve => setTimeout(resolve, 15));
    }
  };

  public stopRespondingClick = () => {
    this.stopStreaming = true;
  };
}