---
layout: post
title: Custom views in Angular AI AssistView component | Syncfusion
description: Checkout and learn about Custom views with Angular AI AssistView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Custom views in Angular AI AssistView component

## Adding custom views

By using the `e-views` selector you can define the collection of different assist view models in the AI AssistView. You can customize the default and the custom views added.

### Setting view type

You can set the type of view by using the `type` property within the `e-view` selector. It accepts two values such as `Assist`, and `Custom`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, HostListener, ViewChild } from '@angular/core';
import { AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `
    <div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest($event)">
        <e-views>
            <e-view type="Assist"></e-view>
            <e-view type="Custom"></e-view>
        </e-views>
    </div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };
}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/custom-view/viewType/src/main.ts %}
{% endhighlight %}
{% endtabs %}

### Setting name

You can use the `name` property to specifies the header name of the `Assist` or `Custom` views in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, HostListener, ViewChild } from '@angular/core';
import { AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `
    <div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest($event)">
        <e-views>
            <e-view name="Prompt"></e-view>
            <e-view name="Response"></e-view>
        </e-views>
    </div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };
}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/custom-view/viewType/src/main.ts %}
{% endhighlight %}
{% endtabs %}

### Setting iconCSS

You can customize the view icons by using the `iconCss` property. By default the `e-assistview-icon` class is added as built-in header icon for the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AIAssistViewModule } from '@syncfusion/ej2-angular-interactive-chat';

import { Component, HostListener, ViewChild } from '@angular/core';
import { AIAssistViewComponent, PromptRequestEventArgs } from '@syncfusion/ej2-angular-interactive-chat';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, AIAssistViewModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the AI AssistView component
    template: `
    <div ejs-aiassistview #aiAssistViewComponent (promptRequest)="onPromptRequest($event)">
        <e-views>
            <e-view iconCss="e-icons e-assistview-icon"></e-view>
            <e-view type="Custom" iconCss="e-icons e-comment-show"></e-view>
        </e-views>
    </div>`
})

export class AppComponent {
    @ViewChild('aiAssistViewComponent')
    public aiAssistViewComponent!: AIAssistViewComponent;

    public onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
          let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
          this.aiAssistViewComponent.addPromptResponse(defaultResponse);
        }, 1000);
    };
}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/custom-view/viewType/src/main.ts %}
{% endhighlight %}
{% endtabs %}

The following example illustrates how types, name, and iconCss are used in a AI AssistView component.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/custom-view/viewType/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/custom-view/viewType/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/custom-view/viewType" %}

### Setting view template 

You can use the `viewTemplate` property to add the view content of the multiple views added in the AI AssistView.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/custom-view/viewTemplate/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/custom-view/viewTemplate/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/custom-view/viewTemplate" %}

## Setting activeView

You can use the `activeView` property to set the active view in the AI AssistView. By default, the value is `0`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/custom-view/activeView/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/custom-view/activeView/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/custom-view/activeView" %}
