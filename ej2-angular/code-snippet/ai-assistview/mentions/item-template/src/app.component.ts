import { Component, ViewChild } from "@angular/core";
import { AIAssistViewComponent, AIAssistViewModule } from "@syncfusion/ej2-angular-interactive-chat";

@Component({
  imports: [AIAssistViewModule],
  standalone: true,
  selector: "app-root",
  styleUrls: ["styles.css"],
  template: ` <ejs-aiassistview
    id="item-template"
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
      description: "Troubleshoot technical issues",
      placeholder: "Ask about VPN, network, or device issues",
    },
    {
      id: "HRAssistant",
      name: "HRAssistant",
      description: "Get assistance with HR policies",
      placeholder: "Ask about leave, benefits, and HR policies",
    },
    {
      id: "KnowledgeBase",
      name: "KnowledgeBase",
      description: "Search internal documentation",
      placeholder: "Search the internal knowledge base",
    },
  ];

  public commands: any[] = [
    {
      id: "table",
      name: "/table",
      description: "Answer as a markdown table",
      placeholder: "Format the response as a table",
    },
    {
      id: "rewrite",
      name: "/rewrite",
      description: "Rewrite content for clarity",
      placeholder: "Improve clarity and professional tone",
    },
    {
      id: "checklist",
      name: "/checklist",
      description: "Create a step-by-step checklist",
      placeholder: "Convert the response into a checklist",
    },
  ];

  public itemTemplate: string =
    '<div class="mention-item"><span class="mention-name">${name}</span><span class="mention-description">${description}</span></div>';
  public mentions: any[] = [
    {
      mentionChar: "@",
      dataSource: this.agents,
      fields: { text: "name", value: "id" },
      itemTemplate: this.itemTemplate,
    },
    {
      mentionChar: "/",
      dataSource: this.commands,
      fields: { text: "name", value: "id" },
      showMentionChar: false,
      itemTemplate: this.itemTemplate,
    },
  ];

  public onPromptRequest = () => {
      setTimeout(() => {
        let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
        this.aiAssistViewComponent.addPromptResponse(defaultResponse);
      }, 1000);
  };
}
