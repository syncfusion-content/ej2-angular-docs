import { Component, ViewChild } from '@angular/core';
import {ChatUIModule, UserModel, ChatUI, ToolbarSettingsModel} from '@syncfusion/ej2-angular-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { marked } from 'marked';

@Component({
  selector: 'app-root',
  template: `
        <div
        id="loadOnDemand"
        ejs-chatui
        #chatUI
        headerText="Chat UI"
        headerIconCss="e-icons e-ai-chat"
        [headerToolbar]="headerToolbar"
        (messageSend)="messageSend($event)"
        [user]="currentUser">
        <ng-template #emptyChatTemplate>
          <div class="emptychat-content">
            <h3><span class="e-icons e-assistview-icon"></span></h3>
            <div class="emptyChatText">
              Just a second, we're preparing your chat...
            </div>
          </div>
        </ng-template>
      </div>
  `,
  standalone: true,
  imports: [ChatUIModule],
})

export class AppComponent {
  @ViewChild('chatUI') public chatUI!: ChatUI;
  private geminiApiKey = ''; // Replace with your Gemini API key
  private genAI = new GoogleGenerativeAI(this.geminiApiKey);
  public currentUser: UserModel = {
    id: 'user1',
    user: 'You',
  };

  public aiUser: UserModel = {
    id: 'ai',
    user: 'Gemini',
  };

  public headerToolbar: ToolbarSettingsModel = {
    items: [
      { iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Chat' },
    ],
    itemClicked: this.toolbarItemClicked,
  };

  messageSend = async  (args: any) => {
      this.chatUI.typingUsers = [this.aiUser];

      try {
        const userPrompt = args.message.text || 'hi';
        const model = this.genAI.getGenerativeModel({ model: 'gemini-2.5-flash' }); // Replace with the updated gemini model
        const result = await model.generateContent(userPrompt);
        const response = result.response.text();

        this.chatUI.addMessage({
          text: (marked.parse(response) as string),
          author: this.aiUser,
        });
        this.chatUI.typingUsers = [];
      } catch (error) {
        this.chatUI.addMessage({
          text: 'Error generating response. Please try again.',
          author: this.aiUser,
      });
      this.chatUI.typingUsers = [];
    }
  };

  toolbarItemClicked(args: any): void {
    (this.chatUI as any).messages = [];
  }
}
