import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import {
  ChatUIModule,
  UserModel,
  ChatUI,
  ToolbarSettingsModel,
} from '@syncfusion/ej2-angular-interactive-chat';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as marked from 'marked';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ChatUIModule],
})

export class AppComponent {
  @ViewChild('chatUI')
  public chatUI: ChatUI;

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

  messageSend = (args: any) => {
    setTimeout(async () => {
      this.chatUI.typingUsers = [this.aiUser];

      try {
        const userPrompt = args.message.text || 'hi';
        const model = this.genAI.getGenerativeModel({
          model: 'gemini-1.5-flash',
        });
        const result = await model.generateContent(userPrompt);
        const response = result.response.text();

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
