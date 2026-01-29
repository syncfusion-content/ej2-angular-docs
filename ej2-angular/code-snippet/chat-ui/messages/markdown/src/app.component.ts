import { Component, ViewChild } from '@angular/core';
import { ChatUIAllModule, ChatUIComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { marked } from 'marked';
declare var DOMPurify: any;
@Component({
  imports: [ChatUIAllModule],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('chatui') public chatUI!: ChatUIComponent;

  public currentUserModel = {
    id: 'user1',
    user: 'Albert',
  };
  public michaleUserModel = {
    id: 'user2',
    user: 'Michale Suyama',
  };

  // Suggestions with display text and Markdown text
  public suggestions = [
    {
      displayText: 'Share quick link',
      markdownText:
        'Check out our [project dashboard](https://dashboard.example.com) for updates!',
    },
    {
      displayText: 'Emphasize priority',
      markdownText:
        'This is **high priority** and needs _immediate attention_.',
    },
  ];

  public suggestionsDisplay: string[] = this.suggestions.map(
    (s) => s.displayText
  );

  public message1: string = marked.parse(
    'Hey Michale, did you review the _new API documentation_?'
  ) as string;
  public message2: string = marked.parse(
    'Yes! The **endpoint specifications** look great. Check the [integration guide](https://api.example.com/docs) when you get a chance.'
  ) as string;

  public onMessageSend(args: any): void {
    args.cancel = true;
    const suggestion = this.suggestions.find(
      (s) => s.displayText === args.message.text
    );

    const messageText = suggestion
      ? suggestion.markdownText
      : args.message.text;
    const parsedText = DOMPurify.sanitize(marked.parse(messageText) as string);
    this.chatUI.addMessage({
      text: parsedText,
      author: this.currentUserModel,
      timeStamp: new Date(),
    });
  }
}
