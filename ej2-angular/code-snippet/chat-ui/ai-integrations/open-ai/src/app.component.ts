import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import {
  ChatUIModule,
  UserModel,
  ChatUI,
  ToolbarSettingsModel,
} from '@syncfusion/ej2-angular-interactive-chat';
import * as marked from 'marked';
import OpenAI from 'openai';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ChatUIModule],
})

export class AppComponent {
  @ViewChild('chatUI')
  public chatUI: ChatUI;

  private openaiApiKey = ''; // Replace with your Gemini API key

  private openai = new OpenAI({
    apiKey: this.openaiApiKey,
    dangerouslyAllowBrowser: true,
  });
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

  messageSend = (args: any) => {
    setTimeout(async () => {
      this.chatUI.typingUsers = [this.aiUser];

      try {
        const userPrompt = args.message.text || 'hi';
        const completion = await this.openai.chat.completions.create({
          messages: [{ role: 'user', content: userPrompt }],
          model: 'gpt-4o-mini', // Or any other model like 'gpt-4'
        });
        const response = completion.choices[0].message.content;

        this.chatUI.addMessage({
          text: marked.parse(response),
          author: this.aiUser,
        });
      } catch (error) {
        console.error('Error fetching Gemini response:', error);
        this.chatUI.addMessage({
          text: 'Error generating response. Please try again.',
          author: this.aiUser,
        });
      } finally {
        this.chatUI.typingUsers = [];
      }
    }, 500);
  };

  toolbarItemClicked() {
    this.chatUI.messages = [];
  }
}

