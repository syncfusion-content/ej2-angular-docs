import { Component, ViewChild } from '@angular/core';
import { ChatUIModule, UserModel, ChatUI, ToolbarSettingsModel,} from '@syncfusion/ej2-angular-interactive-chat';
import { AzureOpenAI } from 'openai';
import * as marked from 'marked';

const azureOpenAIApiKey = 'Your_Azure_OpenAI_API_Key';
const azureOpenAIEndpoint = 'Your_Azure_OpenAI_Endpoint';
const azureOpenAIApiVersion = 'Your_Azure_OpenAI_API_Version';
const azureDeploymentName = 'Your_Deployment_Name';

const client = new AzureOpenAI({
  apiKey: azureOpenAIApiKey,
  endpoint: azureOpenAIEndpoint,
  apiVersion: azureOpenAIApiVersion,
  dangerouslyAllowBrowser: true,
});

@Component({
  selector: 'app-root',
  template: `<div
    id="loadOnDemand"
    ejs-chatui
    #chatUI
    headerText="Chat UI"
    headerIconCss="e-icons e-ai-chat"
    [headerToolbar]="headerToolbar"
    (messageSend)="messageSend($event)"
    [user]="currentUser"
  >
    <ng-template #emptyChatTemplate>
      <div class="emptychat-content">
        <h3><span class="e-icons e-assistview-icon"></span></h3>
        <div class="emptyChatText">
          Just a second, we're preparing your chat...
        </div>
      </div>
    </ng-template>
  </div>`,
  standalone: true,
  imports: [ChatUIModule],
});

export class AppComponent {
  @ViewChild('chatUI') public chatUI!: ChatUI;
  public currentUser: UserModel = { id: 'user1', user: 'You' };
  public aiUser: UserModel = { id: 'ai', user: 'Azure AI' };

  public headerToolbar: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right', tooltip: 'Clear Chat' }],
    itemClicked: this.toolbarItemClicked.bind(this),
  };

  messageSend = async (args: any) => {

    this.chatUI.typingUsers = [this.aiUser];

    try {
      const userPrompt = args.message.text || 'hi';
      const completion = await client.chat.completions.create({
        model: azureDeploymentName,
        messages: [{ role: 'user', content: userPrompt }],
        temperature: 0.7,
      });

      const responseText: string = completion.choices[0].message.content.trim() || 'No response received.';

      this.chatUI.addMessage({
        text: marked.parse(responseText) as string,
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

  private toolbarItemClicked(): void {
    (this.chatUI as any).messages = [];
  }
}