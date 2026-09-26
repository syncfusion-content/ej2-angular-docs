import { Component, ViewChild } from "@angular/core";
import { AIAssistViewComponent, AIAssistViewModule } from "@syncfusion/ej2-angular-interactive-chat";

@Component({
  imports: [AIAssistViewModule],
  standalone: true,
  selector: "app-root",
  template: `<ejs-aiassistview
    id="mention-char"
    #aiAssistViewComponent
    promptPlaceholder="Type '@' for agents or '/' for commands..."
    [mentions]="mentions"
    (promptRequest)="onPromptRequest()"
  ></ejs-aiassistview>`,
})
export class AppComponent {
  @ViewChild("aiAssistViewComponent")
  public aiAssistViewComponent!: AIAssistViewComponent;
  public agents: any[] = [
    {
      id: "TechSupport",
      name: "TechSupport",
      placeholder: "Ask about VPN, network, or device issues",
    },
    {
      id: "HRAssistant",
      name: "HRAssistant",
      placeholder: "Ask about leave, benefits, and HR policies",
    },
    {
      id: "KnowledgeBase",
      name: "KnowledgeBase",
      placeholder: "Search the internal knowledge base",
    },
  ];
  public commands: any[] = [
    {
      id: "table",
      name: "/table",
      placeholder: "Format the response as a table",
    },
    {
      id: "rewrite",
      name: "/rewrite",
      placeholder: "Improve clarity and professional tone",
    },
    {
      id: "checklist",
      name: "/checklist",
      placeholder: "Convert the response into a checklist",
    },
  ];
  public mentions: any[] = [
    {
      mentionChar: "@",
      dataSource: this.agents,
      fields: { text: "name", value: "id" },
    },
    {
      mentionChar: "/",
      dataSource: this.commands,
      showMentionChar: false,
      fields: { text: "name", value: "id" },
    },
  ];
  public onPromptRequest = () => {
      setTimeout(() => {
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        this.aiAssistViewComponent.addPromptResponse(defaultResponse);
      }, 1000);
  };
}
