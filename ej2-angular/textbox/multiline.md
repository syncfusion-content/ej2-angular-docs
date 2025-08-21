---
layout: post
title: Multiline TextBox in Angular TextBox component | Syncfusion
description: Learn how to create and configure multiline TextBox in Syncfusion Angular TextBox component with floating labels, auto-resizing, character counting, and more.
platform: ej2-angular
control: Multiline 
documentation: ug
domainurl: ##DomainURL##
---

# Multiline TextBox in Angular TextBox component

The multiline TextBox feature transforms the standard single-line input into a versatile text area that accepts multiple lines of text. This functionality is essential for capturing longer content such as addresses, descriptions, comments, feedback, and detailed user input where space and formatting flexibility are required.

## Key Features Overview

The multiline TextBox provides several enhanced capabilities:
- **Multi-line text input**: Accept paragraphs and formatted text content
- **Auto-resizing**: Automatic height adjustment based on content
- **Manual resizing**: User-controlled textarea dimensions
- **Character limits**: Built-in text length validation
- **Character counting**: Real-time character count display

## Prerequisites

Before implementing multiline TextBox, ensure the TextBox module is imported and configured in the Angular application.

## Create multiline TextBox

Transform the default TextBox into a multiline TextBox using one of two approaches:

1. **API Configuration**: Set the [multiline](https://ej2.syncfusion.com/angular/documentation/api/textbox/#multiline) property to `true`
2. **HTML Element**: Pass an HTML5 textarea element directly to the TextBox component

Both methods create a textarea that supports multiple lines of text input with consistent styling and behavior.

> The multiline TextBox allows vertical resizing by default, enabling users to adjust the input area height as needed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/textarea-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/textarea-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/textarea-cs1" %}

## Auto resizing

Create a dynamic multiline TextBox that automatically adjusts its height based on content length. This feature eliminates the need for manual resizing and provides a seamless user experience for varying text lengths.

Implementation requires calculating the textarea height during two key events:
- **Created event**: Sets initial height based on existing content
- **Input event**: Dynamically updates height as users type or delete text

This approach ensures the textarea expands and contracts smoothly, accommodating both initial values and real-time content changes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/resize-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/resize-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/resize-cs1" %}

## Disable resizing

Prevent users from manually resizing the multiline TextBox by applying CSS styles that disable the resize functionality. This approach maintains consistent layout design and prevents potential UI disruption.

Apply the following CSS styles to remove resize handles and lock the textarea dimensions:

```CSS
textarea.e-input, 
.e-input-group textarea, 
.e-input-group textarea.e-input, 
.e-input-group.e-input-focus textarea, 
.e-input-group.e-input-focus textarea.e-input, 
.e-input-group.e-control-wrapper textarea, 
.e-input-group.e-control-wrapper.e-input-focus textarea, 
.e-input-group.e-control-wrapper textarea.e-input, 
.e-input-group.e-control-wrapper.e-input-focus textarea.e-input, 
.e-float-input textarea, 
.e-float-input.e-control-wrapper textarea {
    resize: none;
}
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/disable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/disable-cs1/src/index.css %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/disable-cs1" %}

## Limit the text length

Control text input length by implementing character limits on the multiline TextBox. This feature helps maintain data consistency and prevents excessive input that might impact performance or storage requirements.

### Setting character limits

Set the maximum character limit using the `maxLength` attribute through the [addAttributes](https://ej2.syncfusion.com/angular/documentation/api/textbox/#addattributes) method. The TextBox automatically prevents additional input once the limit is reached.

```typescript
// Add maxLength attribute to limit input to 100 characters
this.textboxObject.addAttributes({ maxLength: '100' });
```

### Removing character limits

Use the [`removeAttribute`](https://ej2.syncfusion.com/angular/documentation/api/textbox/#removeattributes) method to dynamically remove character restrictions when unlimited text input is required. This provides flexibility for conditional input scenarios.

```typescript
// Remove maxLength restriction to allow unlimited input
this.textboxObject.removeAttribute('maxLength');
```


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/maxlength-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/maxlength-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/maxlength-cs1" %}

## Count characters

Provide real-time feedback to users with a character counter that displays current text length and remaining available characters. This feature enhances user experience by showing input progress and helping users stay within defined limits.

The character count updates dynamically during text input, deletion, and paste operations. Implementation involves monitoring the [`input`](https://ej2.syncfusion.com/angular/documentation/api/textbox/#input) event of the multiline TextBox and calculating the current character count against any defined maximum limits.

Benefits of character counting include:
- **User guidance**: Clear indication of input limits and remaining space
- **Data validation**: Prevention of form submission errors due to length constraints
- **User experience**: Immediate feedback without requiring form validation

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/textbox/count-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/textbox/count-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/textbox/count-cs1" %}

## Best Practices

- **Performance**: For auto-resizing TextBoxes, consider applying throttling to resize calculations to maintain responsiveness during rapid input.
- **Validation**: Combine character limits with proper error messaging for comprehensive input validation
- **Responsive Design**: Test multiline TextBox behavior across different screen sizes and orientations
- **User Experience**: Provide clear visual feedback for character limits and validation states