import { Component, ElementRef, ViewChild } from '@angular/core';
import { AIAssistViewModule, AIAssistViewComponent } from '@syncfusion/ej2-angular-interactive-chat';
import { assistantSuggestions, assistantResponses } from './promptResponseData';
import { ListViewComponent, ListViewModule } from '@syncfusion/ej2-angular-lists';
import { SidebarComponent, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonComponent, ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { marked } from 'marked';

// Initialize AI AssistView component
@Component({
  standalone: true,
  imports: [
    AIAssistViewModule,
    ListViewModule,
    SidebarModule,
    ButtonModule
  ],
  selector: 'app-root',
  template: `
    <div class="control-section">
  <div>
    <div id="chatgpt">
      <div>
        <div class="ai-assist-header">
          <button
            ejs-button
            #closeButton
            id="close"
            title="Expand Navigation"
            cssClass="e-flat"
            iconCss="e-icons e-menu"
            (click)="toggleSidebar()"
          ></button>
        </div>
        <div
          id="aiAssistView"
          ejs-aiassistview
          #aiAssistViewInst
          [bannerTemplate]="bannerTemplate"
          [promptSuggestions]="suggestions"
          [enableAttachments]="enableAttachments"
          [attachmentSettings]="attachmentSettings"
          (promptRequest)="promptRequest($event)"
          [showHeader]="showHeader"
          width="auto"
        ></div>
      </div>
    </div>
  </div>
</div>
<ejs-sidebar
  class="left-content"
  ejs-sidebar
  id="assistantSidebar"
  #sideObj
  width="250px"
  target="#chatgpt"
  position="Left"
  (open)="onSidebarOpen()"
  (close)="onSidebarClose()"
>
  <div style="overflow: auto">
    <div class="assistantToolbar">
      <div class="header-left">
        <span
          class="header-icon e-icons e-assistview-icon"
          id="icon-assist"
        ></span>
        <span class="header-title">AI Assist</span>
      </div>
      <button
        #toggleButton
        id="toggle-btn-close"
        title="Collapse Navigation"
        ejs-button
        cssClass="e-flat"
        [iconCss]="floatingToggleIcon"
        (click)="toggleSidebar()"
      ></button>
    </div>
    <!-- Left actions list -->
    <div id="left-pane-listview">
      <ejs-listview
        #leftList
        [dataSource]="leftPanelListData"
        [template]="leftListTemplate"
        (select)="onLeftListSelect()"
      >
      </ejs-listview>
      <ng-template #leftListTemplate let-data>
        <div class="e-list-wrapper">
          <span class="{{ data.class }}"></span>
          <span class="e-list-content">{{ data.text }}</span>
        </div>
      </ng-template>
    </div>
    <!-- Conversation list -->
    <div
      class="assistant-sidebar-content"
      style="margin-top: 10px; height: 235px"
    >
      <div class="header-conversation">Chats</div>
      <ejs-listview
        id="assistant-listview-grp"
        #grpListObj
        [dataSource]="listData"
        [fields]="fields"
        (select)="onListViewSelect($event)"
      >
        <ng-template #template let-item>
          <div class="e-text-content">
            <span class="e-list-text">{{ item.text }}</span>
            <span
              class="e-icons e-trash delete-btn"
              title="Delete Conversation"
            ></span>
          </div>
        </ng-template>
      </ejs-listview>
    </div>
    <!-- Footer sign-in -->
    <div class="sign-in">
      <span class="e-icons e-user"></span>
      <span class="user-name">User</span>
    </div>
  </div>
</ejs-sidebar>
<!-- Banner Template for AI Assistant -->
<ng-template #bannerTemplate>
  <div #bannerContent class="banner-content e-no-content">
    <div class="e-icons e-assistview-icon"></div>
    <h3 class="ai-assist-banner-subtitle">
      Hello, I'm Your Digital Assistant!
    </h3>
  </div>
</ng-template>
  `
})
export class AppComponent {
  @ViewChild('aiAssistViewInst') public aiAssistViewInst!: AIAssistViewComponent;
  @ViewChild('grpListObj') public grpListObj!: ListViewComponent;
  @ViewChild('leftList') public leftList!: ListViewComponent;
  @ViewChild('sideObj') public sideObj!: SidebarComponent;
  @ViewChild('closeButton') closeButton: ButtonComponent;
  @ViewChild('toggleButton') toggleButton!: ButtonComponent;
  @ViewChild('bannerContent') bannerContent!: ElementRef<HTMLDivElement>;
  @ViewChild('grpListObj') listviewGrp!: ElementRef<HTMLDivElement>;
  // AIAssist settings
  public enableAttachments = true;
  public attachmentSettings = {
    saveUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/angular/production/api/FileUploader/Remove'
  };
  public showHeader = false;
  public suggestions: string[] = assistantSuggestions;

  public azureApiKey: string = '';
  public azureEndpoint: string = '';
  public azureDeployment: string = '';
  public azureApiVersion: string = '';
  // Left panel actions
  public leftPanelListData = [
    { text: 'New chat', class: 'e-icons e-rename', id: 'new-chat' },
    { text: 'Search chat', class: 'e-icons e-search' },
    { text: 'Library', class: 'e-icons e-reading-view' },
    { text: 'New project', class: 'e-icons e-add-notes' },
  ];
  // Conversation list
  public listData: Array<{ text: string; id: number; numericId: number }> = [];
  public fields: { [key: string]: Object } = { id: 'id', text: 'text' };
  // State
  public selectedConvId: string | number | '' = '';
  public isFirstPrompt = false;
  private isMobile = false;
  private onResizeHandler = this.onResize.bind(this);
  public floatingToggleIcon = 'e-icons e-menu';
  ngAfterViewInit(): void {
    this.initializingApp();
    this.listData = this.getLeftPaneData();
    this.bindDeleteClick();
    this.setSidebarConfig();
    this.setIcon();
    window.addEventListener('resize', this.onResizeHandler, { passive: true });
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.onResizeHandler as any);
  }
  // Prompt request from AIAssistView
  public promptRequest(args: any): void {
    this.updateBannerStyle();
    this.execute(args.prompt);
  }
  // Sidebar behavior
  private setSidebarConfig(): void {
    this.isMobile = window.innerWidth <= 680;
    if (this.isMobile) {
      this.sideObj.enableDock = false;
      (this.sideObj as any).type = 'Over';
      this.sideObj.showBackdrop = true;
      setTimeout(() => this.sideObj.hide(), 100);
    } else {
      this.sideObj.enableDock = false;
      (this.sideObj as any).type = 'Push';
      this.sideObj.showBackdrop = false;
      setTimeout(() => this.sideObj.show(), 100);
    }
    this.sideObj.dataBind();
  }
  private onResize(): void {
    const newIsMobile = window.innerWidth <= 680;
    if (newIsMobile !== this.isMobile) {
      this.isMobile = newIsMobile;
      this.setSidebarConfig();
    }
    this.setIcon();
  }
  public onSidebarOpen(): void {
    this.closeButton.element.style.display = 'none';
  }
  public onSidebarClose(): void {
    setTimeout(() => {
      this.closeButton.element.style.display = 'block';
    }, 300);
  }
  private setIcon(): void {
    if (this.toggleButton) {
      const iconCss =
        window.innerWidth <= 680 ? 'e-icons e-close' : 'e-icons e-menu';
      (this.toggleButton as any).iconCss = iconCss;
      (this.toggleButton as any).dataBind?.();
    }
  }
  // Initialize app (aligns to TS sample)
  private initializingApp(): void {
    this.checkInitialLocalStorage();
  }
  public toggleSidebar(): void {
    this.sideObj.toggle();
  }
  // Local storage utilities
  private checkInitialLocalStorage(isClear?: boolean): void {
    if (isClear || !localStorage.getItem('aiassist-view')) {
      localStorage.setItem('aiassist-view', JSON.stringify({}));
    }
  }
  private getDate(): number {
    return Date.now();
  }
  private getLeftPaneData() {
    const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
    const keys = Object.keys(appData);
    const items: any[] = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const numericKey = parseInt(key, 10);
      const convData = appData[key];
      const name = (convData.name || '').split('\n')[0];
      items.push({
        text: name,
        id: numericKey,
        numericId: numericKey,
      });
    }
    items.sort((a, b) => b.numericId - a.numericId);
    return items;
  }
  private refreshConversationList(): void {
    this.grpListObj.dataSource = this.getLeftPaneData();
    this.grpListObj.dataBind();
  }
  private updateAIAssistViewData(id: string | number): void {
    if (id) {
      const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
      const convData = appData[id.toString()];
      this.aiAssistViewInst.prompts = convData?.prompts || [];
      this.aiAssistViewInst.promptSuggestions =
        convData?.promptSuggestions || this.suggestions;
    } else {
      this.aiAssistViewInst.prompts = [];
      this.aiAssistViewInst.promptSuggestions = this.suggestions;
    }
  }
  private updateBannerStyle(): void {
    const bannerElem = this.bannerContent?.nativeElement as HTMLElement | null;
    if (bannerElem) {
      bannerElem.style.display =
        (this.aiAssistViewInst.prompts?.length || 0) > 0 ? 'none' : 'block';
    }
  }
  // New chat (aligns with TS)
  public loadNewAIAssist(): void {
    this.selectedConvId = '';
    this.isFirstPrompt = true;
    this.aiAssistViewInst.prompts = [];
    this.aiAssistViewInst.promptSuggestions = this.suggestions;
    this.updateBannerStyle();
  }
  // Left actions list selection
  public onLeftListSelect(): void {
    if (!this.leftList) return;
    const sel = (this.leftList as any).getSelectedItems?.();
    if (sel && sel.item) {
      const data = (this.leftList as any).getItemData(sel.item);
      if (data?.id === 'new-chat') {
        // Deselect conversation list if selected
        if (this.grpListObj) {
          const grpsel = (this.grpListObj as any).getSelectedItems?.();
          if (grpsel && grpsel.item) {
            (this.grpListObj as any).unselectItem(grpsel.item);
          }
        }
        this.loadNewAIAssist();
      }
    }
  }
  // Conversation select handler
  public onListViewSelect(args: any): void {
    if (args?.event) {
      // Deselect left actions if needed
      if (this.leftList) {
        const sel = (this.leftList as any).getSelectedItems?.();
        if (sel && sel.item) {
          (this.leftList as any).unselectItem(sel.item);
        }
      }
      const data = args.data as any;
      this.selectedConvId = data.id;
      this.updateAIAssistViewData(data.id);
      this.updateBannerStyle();
    }
  }
  // Delete click handler hookup (same logic as TS)
  private bindDeleteClick(): void {
    const host = this.listviewGrp?.nativeElement;
    host?.addEventListener('click', (e: Event) => {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest('.delete-btn') as HTMLElement | null;
      if (!btn) return;
      e.preventDefault();
      e.stopPropagation();
      const li = btn.closest('li') as HTMLElement;
      const item = (this.grpListObj as any).getItemData(li) as {
        id: string | number;
      };
      const app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
      delete app[String(item.id)];
      localStorage.setItem('aiassist-view', JSON.stringify(app));
      (this.grpListObj as any).removeItem(li);
      const ds = (
        (this.grpListObj as any).dataSource as Array<{ id: string | number }>
      ).filter((d) => d.id !== item.id);
      (this.grpListObj as any).dataSource = ds;
      (this.grpListObj as any).dataBind();
      if (this.selectedConvId === item.id) {
        this.selectedConvId = '';
        this.aiAssistViewInst.prompts = [];
        this.aiAssistViewInst.promptSuggestions = this.suggestions;
        this.updateBannerStyle();
      }
    });
  }
  // Persist conversation (aligns with TS)
  private checkAndUpdateLocalStorage(prompt: string): void {
    const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
    const curConvDate = this.getDate();
    // Gather prompts and suggestions from the control
    const prompts: any[] = [];
    const orgPrompts = this.aiAssistViewInst.prompts || [];
    for (let i = 0; i < orgPrompts.length; i++) {
      const tPrompt = {
        prompt: orgPrompts[i].prompt || '',
        response: orgPrompts[i].response || '',
      };
      prompts.push(tPrompt);
    }
    const pSuggestions: string[] = [];
    const orgPSuggestions = this.aiAssistViewInst.promptSuggestions || [];
    for (let j = 0; j < orgPSuggestions.length; j++) {
      pSuggestions.push(orgPSuggestions[j]);
    }
    if (this.selectedConvId) {
      const convData = appData[this.selectedConvId];
      // keep the list item title synced
      const dataSource = this.grpListObj.dataSource as any[];
      if (dataSource) {
        for (let k = 0; k < dataSource.length; k++) {
          const item = dataSource[k] as any;
          if (item && item.id === this.selectedConvId) {
            item.text = convData.name;
            break;
          }
        }
      }
      this.grpListObj.dataBind();
      convData.prompts = prompts;
      convData.promptSuggestions = pSuggestions;
      localStorage.setItem('aiassist-view', JSON.stringify(appData));
    } else {
      // Create new conversation with prompt as name
      this.selectedConvId = curConvDate.toString();
      const convData = {
        name: prompt,
        prompts: prompts,
        promptSuggestions: pSuggestions,
      };
      appData[curConvDate] = convData;
      localStorage.setItem('aiassist-view', JSON.stringify(appData));
      this.refreshConversationList();
      const itemToSelect: any = 0;
      this.grpListObj.selectItem(itemToSelect);
    }
  }
  // Renames the conversation after the first prompt is submitted (as in TS)
  private updateConversationName(prompt: string) {
    if (this.isFirstPrompt && this.selectedConvId) {
      const store = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
      const convData = store[this.selectedConvId];
      if (convData?.name === 'New Conversation') {
        convData.name = prompt.slice(0, 40).trim();
        localStorage.setItem('aiassist-view', JSON.stringify(store));
        const listItem = ((this.grpListObj.dataSource as any[]) || []).find(
          (item: any) => item.id === this.selectedConvId
        );
        if (listItem) {
          listItem.text = convData.name;
          this.grpListObj.dataBind();
        }
        this.refreshConversationList();
      }
      this.isFirstPrompt = false;
    }
  }
  // Execute prompt (aligns with TS sample)
  public async execute(prompt: string): Promise<void> {
    try {
      this.aiAssistViewInst.promptSuggestions = [];
      const finalResult: string[] = [];
      setTimeout(() => {
        const suggestionsObj = assistantResponses.find(
          (resp: any) => resp.prompt === prompt
        );
        const suggestionResult = suggestionsObj
          ? suggestionsObj.suggestions || this.suggestions
          : this.suggestions;
        for (let i = 0; i < suggestionResult.length; i++) {
          if (suggestionResult[i]) {
            finalResult.push(
              suggestionResult[i].replace('- ', '').replace('* ', '').trim()
            );
          }
        }
      }, 1000);
      setTimeout(async () => {
        const text = await (async () => {
          const url =
              this.azureEndpoint.replace(/\/$/, '') +
              `/openai/deployments/${encodeURIComponent(this.azureDeployment)}/chat/completions` +
              `?api-version=${encodeURIComponent(this.azureApiVersion)}`;

          const res = await fetch(url, {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json',
              'api-key': this.azureApiKey
              },
              body: JSON.stringify({
              messages: [{ role: 'user', content: prompt! }],
              temperature: 0.7,
              max_tokens: 200
              })
          });

          const data = await res.json().catch(() => ({} as any));
          if (!res.ok) {
              const apiMsg = (data as any)?.error?.message || `HTTP ${res.status} ${res.statusText}`;
              throw new Error(apiMsg);
          }

          return (data as any)?.choices?.[0]?.message?.content?.trim() || 'No response received.';
          })();
        this.aiAssistViewInst.addPromptResponse(marked.parse(text));
        this.aiAssistViewInst.promptSuggestions = finalResult;
        this.checkAndUpdateLocalStorage(prompt);
        this.updateConversationName(prompt);
      }, 1000);
    } catch (error) {
      const fallback =
        '⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key.';
      this.aiAssistViewInst.addPromptResponse(fallback);
      this.aiAssistViewInst.promptSuggestions = [];
      this.updateConversationName(prompt);
    }
  } 
}