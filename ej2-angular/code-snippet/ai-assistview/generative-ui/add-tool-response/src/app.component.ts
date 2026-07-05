import { Component, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AIAssistViewModule,
  AIAssistViewComponent,
  PromptRequestEventArgs,
  ToolbarItemClickedEventArgs,
  ToolbarSettingsModel
} from '@syncfusion/ej2-angular-interactive-chat';
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge';

@Component({
  selector: 'app-root',
  template: `
    <div class="control-section">
      <ejs-aiassistview
        #recipeAIAssistView
        id="register-tool"
        [promptSuggestionsHeader]="promptSuggestionsHeader"
        [promptSuggestions]="promptSuggestions"
        [enableStreaming]="enableStreaming"
        [showClearButton]="showClearButton"
        [prompts]="prompts"
        [toolbarSettings]="assistViewToolbarSettings"
        (promptRequest)="onPromptRequest($event)">
      </ejs-aiassistview>
    </div>

    <!-- Recipe Maker Tool Template -->
    <ng-template #recipeMakerTemplate let-data>
      <div class="recipe-panel" #recipeContainer>
        <h2 class="recipe-title" contenteditable="true">{{ data.title }}</h2>

        <div class="recipe-section">
          <h4>🥕 Ingredient
            <button class="e-btn e-primary e-small" style="float:right;" (click)="addIngredient(recipeContainer)">+ Add Ingredient</button>
          </h4>
          <div class="ingredients-list" (click)="onRemoveItem($event)">
            <div class="ingredient-item" *ngFor="let ing of data.ingredients">
              <span class="ingredient-name editable">{{ ing.name }}</span>
              <span class="ingredient-qty editable">{{ ing.quantity }}</span>
              <button class="e-btn e-small e-danger remove-ingredient e-icons e-close"></button>
            </div>
          </div>
        </div>

        <div class="recipe-section">
          <h4>📋 Instructions
            <button class="e-btn e-primary e-small" style="float:right;" (click)="addStep(recipeContainer)">+ Add Step</button>
          </h4>
          <div class="instructions-list" (click)="onRemoveItem($event)">
            <div class="step-item" *ngFor="let step of data.instructions; let i = index">
              <span class="step-text editable">{{ step }}</span>
              <button class="e-btn e-small e-danger remove-step e-icons e-close"></button>
            </div>
          </div>
        </div>

        <div style="margin-top: 30px; text-align: center;">
          <button class="e-btn e-primary check-score-btn" (click)="onCheckScore(recipeContainer)">Check Recipe Score</button>
        </div>
      </div>
    </ng-template>

    <!-- Recipe Score Gauge -->
    <ng-template #recipeScoreTemplate let-data>
      <div class="score-gauge-panel" style="padding:20px; background:#f8f9fa; border-radius:12px; text-align:center;">
        <h4 style="margin-bottom:15px;">{{ data.title }}</h4>
        <ejs-circulargauge
          height="380px"
          width="380px"
          [title]="data.title"
          [allowMargin]="false"
          [titleStyle]="{ size: '18px', fontFamily: 'inherit' }"
          [tooltip]="gaugeTooltip">
          <e-axes>
            <e-axis [startAngle]="270" [endAngle]="90" [minimum]="0" [maximum]="10" radius="105%"
              [lineStyle]="{ width: 0 }"
              [majorTicks]="{ height: 12, width: 1.5, interval: 2, offset: 35 }"
              [minorTicks]="{ height: 0 }"
              [labelStyle]="{ font: { size: '12px' }, position: 'Outside', offset: -40 }">
              <e-annotations>
                <e-annotation
                  [content]="getGaugeAnnotation(data.score)"
                  [angle]="0"
                  zIndex="1"
                  radius="-10%">
                </e-annotation>
              </e-annotations>
              <e-pointers>
                <e-pointer radius="70%" [needleEndWidth]="2" [pointerWidth]="5"
                  [value]="data.score / 10"
                  [cap]="{ radius: 8, border: { width: 2 } }">
                </e-pointer>
              </e-pointers>
              <e-ranges>
                <e-range [start]="0" [end]="2" [startWidth]="40" [endWidth]="40" color="#F03E3E" radius="80%"></e-range>
                <e-range [start]="2" [end]="5" [startWidth]="40" [endWidth]="40" color="#f6961e" radius="80%"></e-range>
                <e-range [start]="5" [end]="8" [startWidth]="40" [endWidth]="40" color="#FFDD00" radius="80%"></e-range>
                <e-range [start]="8" [end]="10" [startWidth]="40" [endWidth]="40" color="#30B32D" radius="80%"></e-range>
              </e-ranges>
            </e-axis>
          </e-axes>
        </ejs-circulargauge>
        <div style="font-size:2.4em; font-weight:bold; color:#30B32D; margin:10px 0;">
          {{ data.score }}/100
        </div>
        <p style="color:#555;">{{ getScoreComment(data.score) }}</p>
      </div>
    </ng-template>
  `,
  styleUrls: ['./styles.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [CommonModule, AIAssistViewModule, CircularGaugeModule]
})
export class AppComponent implements AfterViewInit {

  @ViewChild('recipeAIAssistView') public recipeAIAssistView!: AIAssistViewComponent;
  @ViewChild('recipeMakerTemplate') public recipeMakerTemplate: any;
  @ViewChild('recipeScoreTemplate') public recipeScoreTemplate: any;

  public promptSuggestionsHeader: string = 'Suggested Prompts';

  public promptSuggestions: string[] = [
    'Suggest a healthy breakfast recipe under 5 ingredients',
    'What is the weather in New York?'
  ];

  public prompts: any[] = [
    {
      prompt: 'What is the weather in New York?', blocks: [
        { blockType: 'text', content: 'Here is the current weather forecast for your location:' },
        { blockType: 'tool', toolName: 'weather-card' },
        { blockType: 'text', content: '**Scattered Showers Expected** with temperatures ranging from **1°C to -4°C**. There is a **100% chance of snow**, so it\'s recommended to bundle up and exercise caution if traveling. The weather system is expected to continue throughout the day with moderate precipitation.' }
      ]
    }
  ];

  public enableStreaming: boolean = true;
  public showClearButton: boolean = true;

  private scoreBlocks: any[] = [];

  public gaugeTooltip: object = { enable: true };

  public assistViewToolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: (args: ToolbarItemClickedEventArgs) => {
      if (args.item.iconCss === 'e-icons e-refresh') {
        this.recipeAIAssistView.prompts = [];
        this.recipeAIAssistView.promptSuggestions = this.promptSuggestions;
      }
    }
  };

  ngAfterViewInit(): void {
    this.registerTools();
  }

  private registerTools(): void {
    if (!this.recipeAIAssistView) return;

    (this.recipeAIAssistView as any).registerToolUI({
      toolName: 'recipe-maker',
      template: this.recipeMakerTemplate
    });

    (this.recipeAIAssistView as any).registerToolUI({
      toolName: 'recipe-score-gauge',
      template: this.recipeScoreTemplate
    });

    (this.recipeAIAssistView as any).registerToolUI({
      toolName: 'weather-card',
      template: `<div tabindex="0" class="e-card" id="weather_card" role="button">
                  <div class="e-card-header">
                    <div class="e-card-header-caption">
                      <div class="e-card-header-title">Today</div>
                      <div class="e-card-sub-title">New York - Scattered Showers.</div>
                    </div>
                  </div>
                  <div class="e-card-header weather_report">
                    <div class="e-card-header-image"></div>
                    <div class="e-card-header-caption">
                      <div class="e-card-header-title">1º / -4º</div>
                      <div class="e-card-sub-title">Chance for snow: 100%</div>
                    </div>
                  </div>
                </div>`
    });
  }

  public getGaugeAnnotation(score: number): string {
    return `<div style="font-size:22px; margin-top:15px; font-family:inherit;">${score}</div>`;
  }

  public addIngredient(container: HTMLElement): void {
    const list = container.querySelector('.ingredients-list') as HTMLElement;
    const newItem = document.createElement('div');
    newItem.className = 'ingredient-item';
    newItem.innerHTML = `
      <span class="ing-name" contenteditable="true" style="flex:1;">New Ingredient</span>
      <span class="ing-qty" contenteditable="true" style="width:90px; text-align:right;">qty</span>
      <button class="e-btn e-small e-danger remove-ing e-close"></button>`;
    list.appendChild(newItem);
  }

  public addStep(container: HTMLElement): void {
    const list = container.querySelector('.instructions-list') as HTMLElement;
    const index = list.children.length + 1;
    const newItem = document.createElement('div');
    newItem.className = 'step-item';
    newItem.innerHTML = `
      <strong>${index}.</strong>
      <span class="step-text" contenteditable="true" style="flex:1;">New instruction step...</span>
      <button class="e-btn e-small e-danger remove-step e-close"></button>`;
    list.appendChild(newItem);
  }

  public onRemoveItem(e: Event): void {
    const target = e.target as HTMLElement;
    if (target.classList.contains('remove-ing') || target.classList.contains('remove-step')) {
      target.parentElement?.remove();
    }
  }

  public onCheckScore(container: HTMLElement): void {
    const recipeData = this.getCurrentRecipeData(container);
    const score = this.calculateRecipeScore(recipeData);

    this.scoreBlocks = [
      { blockType: 'text', content: `**Recipe Score Analysis**\n\nHere is the health & quality score for **${recipeData.title}**.` },
      { blockType: 'tool', toolName: 'recipe-score-gauge', props: { score, title: recipeData.title } },
      { blockType: 'text', content: 'You can continue editing the recipe above and check the score again anytime.' }
    ];

    this.recipeAIAssistView.executePrompt('Generate a score analysis for this recipe.');
  }

  private getCurrentRecipeData(container: HTMLElement): any {
    return {
      title: (container.querySelector('.recipe-title') as HTMLElement)?.textContent?.trim() || 'Untitled Recipe',
      ingredients: Array.from(container.querySelectorAll('.ingredient-item')).map((item: any) => ({
        name: item.querySelector('.ing-name')?.textContent?.trim(),
        quantity: item.querySelector('.ing-qty')?.textContent?.trim()
      })).filter((ing: any) => ing.name),
      instructions: Array.from(container.querySelectorAll('.step-item .step-text'))
        .map(el => (el as HTMLElement).textContent?.trim())
        .filter(Boolean)
    };
  }

  private calculateRecipeScore(recipe: any): number {
    const ingredients: any[] = recipe.ingredients || [];
    const instructions: any[] = recipe.instructions || [];

    if (!ingredients.length) return 15;
    if (!instructions.length) return 20;

    let score = 100;
    let validIng = 0;
    let validSteps = 0;

    for (const ing of ingredients) {
      const name = (ing.name || '').trim();
      const qty = (ing.quantity || '').trim();
      if (!name || !qty) {
        score -= 12;
      } else {
        validIng++;
      }
    }

    if (validIng >= 5) score += 10;
    else if (validIng === 1) score -= 20;
    else if (validIng === 2) score -= 10;

    for (const step of instructions) {
      const s = (step || '').trim();
      if (!s) {
        score -= 15;
      } else {
        validSteps++;
      }
    }

    if (validSteps >= 4) score += 10;
    else if (validSteps === 1) score -= 25;
    else if (validSteps === 2) score -= 15;
    else if (validSteps === 3) score -= 5;

    if (validIng >= 3 && validSteps >= 3) score += 8;

    score += Math.floor(Math.random() * 6);

    return Math.min(100, Math.max(10, score));
  }

  public getScoreComment(score: number): string {
    if (score >= 90) return 'Outstanding recipe! Highly recommended.';
    if (score >= 80) return 'Very good recipe with excellent balance.';
    if (score >= 70) return 'Solid recipe. Minor improvements possible.';
    return 'Average recipe. Consider refining ingredients or steps.';
  }

  public onPromptRequest = async (args: PromptRequestEventArgs): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (args.prompt === 'What is the weather in New York?') {
      this.recipeAIAssistView.addPromptResponse({
        blocks: [
          { blockType: 'text', content: 'Here is the current weather forecast for your location:' },
          { blockType: 'tool', toolName: 'weather-card' },
          { blockType: 'text', content: '**Scattered Showers Expected** with temperatures ranging from **1°C to -4°C**. There is a **100% chance of snow**, so it\'s recommended to bundle up and exercise caution if traveling. The weather system is expected to continue throughout the day with moderate precipitation.' }
        ]
      });
      return;
    }

    if (args.prompt === 'Generate a score analysis for this recipe.') {
      this.recipeAIAssistView.addPromptResponse({ blocks: this.scoreBlocks });
      return;
    }

    if (args.prompt === 'Suggest a healthy breakfast recipe under 5 ingredients') {
      const mockRecipe = {
        title: 'Butter Toast',
        ingredients: [
          { name: 'Bread slices', quantity: '2' },
          { name: 'Butter', quantity: '1 tbsp' },
          { name: 'Sugar', quantity: '1 tsp' }
        ],
        instructions: [
          'Spread butter on bread slices',
          'Toast until golden and sprinkle sugar on top'
        ]
      };

      this.recipeAIAssistView.addPromptResponse({
        blocks: [
          { blockType: 'text', content: '**Here is your recipe!** Feel free to edit ingredients and steps, then click **Check Recipe Score**.' },
          { blockType: 'tool', toolName: 'recipe-maker', props: mockRecipe }
        ]
      });
    } else {
      this.recipeAIAssistView.addPromptResponse(
        'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.'
      );
    }
  };
}