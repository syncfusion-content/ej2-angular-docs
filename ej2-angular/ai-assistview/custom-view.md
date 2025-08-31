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

The AI AssistView component supports multiple views that allow you to organize different types of content within the same component.

## Adding custom views

The `e-views` selector enables you to define a collection of different view models within the AI AssistView component. Each view can be independently customized with different appearances and content.

### Setting view type

You can specify the type of view using the [type](../api/ai-assistview/#assistViewType) property within the `e-view` selector. It accepts two values such as `Assist`, and `Custom`.

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

You can use the [name](../api/ai-assistview/assistViewModel/#name) property to specifies the header name of the `Assist` or `Custom` views in the AI AssistView.

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

### Setting iconCss

You can customize the view icons using the [iconCss](../api/ai-assistview/assistViewModel/#iconcss) property. By default the `e-assistview-icon` class is added as built-in header icon for the AI AssistView.

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

The [viewTemplate](../api/ai-assistview/assistViewModel/#viewtemplate) property allows to define custom content for multiple views within the AI AssistView.

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

You can use the [activeView](../api/ai-assistview/#activeview) property to specify which view should be displayed when the AI AssistView component initializes. By default, the first view (index 0) is set as active.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/ai-assistview/custom-view/activeView/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/ai-assistview/custom-view/activeView/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/ai-assistview/custom-view/activeView" %}
