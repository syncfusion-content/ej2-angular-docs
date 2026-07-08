---
layout: post
title: Localization in Angular Diagram component | Syncfusion®
description: Learn how to localize context menus and symbol palette functionality in Syncfusion® Angular Diagram component with culture-specific text.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in EJ2 Angular Diagram Component

The EJ2 Angular Diagram component supports localization functionality, allowing developers to adapt the user interface to different languages and regions. The diagram's symbol palette search box and context menu items can be localized based on the selected culture. Use the locale property of the diagram to specify the desired culture for localization.

## Localize Diagram context menu

To localize the diagram context menu, define the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/diagram#locale) property of the diagram with the preferred culture. The example below demonstrates localization using 'de-DE', the locale code for German as used in Germany.

```typescript
import { Component, ViewChild, OnInit } from '@angular/core';
import { DiagramModule, DiagramContextMenuService } from '@syncfusion/ej2-angular-diagrams';
import { Diagram, DiagramContextMenu, ContextMenuSettingsModel } from '@syncfusion/ej2-diagrams';
import { setCulture, L10n } from '@syncfusion/ej2-base';

@Component({
  providers: [DiagramContextMenuService],
  selector: 'app-container',
  template: `<ejs-diagram id="diagram" width="100%" height="580px" 
             [locale]="locale" [contextMenuSettings]="contextMenuSettings"></ejs-diagram>`,
})
export class AppComponent implements OnInit {
    @ViewChild("diagram")
    public locale: string = 'de-DE';
    public contextMenuSettings: ContextMenuSettingsModel = {
        show: true
    };

    ngOnInit(): void {
        // Component initialization logic here
    }
}
```

Next, call the `setCulture('de')` function to set the default culture for all EJ2 components. This method accepts one parameter, cultureName, which specifies the culture name to be set as the default.

Define the localized text for the context menu items to replace the default English text:

```typescript

// Set the default culture to German
setCulture('de')

// Load locale text for the diagram context menu
L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Corte',
      Copy: 'Copia',
      Paste: 'Pasta',
      Undo: 'Deshacer',
      Redo: 'Rehacer',
      SelectAll: 'Seleccionar todo',
      Grouping: 'Agrupación',
      Group: 'Grupo',
      Ungroup: 'Desagrupar',
      Order: 'Fin',
      BringToFront: 'Traer a delante',
      MoveForward: 'Movimiento adelante',
      SendToBack: 'Enviar a espalda',
      SendBackward: 'Enviar hacia atrás',
    },
  },
});
```

The following code example demonstrates the complete locale settings for the context menu:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/locale/localcontextmenu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/locale/localcontextmenu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/locale/localcontextmenu-cs1" %}

## Localize Symbol palette

Enable the search functionality in the symbol palette using the [`enableSearch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel#enablesearch) property. The search box supports localization to match the application's target language.

To localize the symbol palette search box, define the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel#locale) property of the symbol palette with the preferred culture. The example below uses 'de-DE' for German localization.

The following code demonstrates symbol palette localization:

```typescript
// Set the default culture to German
setCulture('de');

// Load locale text for the SearchShapes
L10n.load({
    'de-DE': {
        SymbolPalette: {
            'SearchShapes': 'Formen suchen',
        }
    }
});

// Initialize symbol palette
ngOnInit(): void {
    this.expandMode = 'Multiple';
    this.palettes = [{
        // Sets the id of the palette
        id: 'basic',
        // Sets whether the palette expands/collapses its children
        expanded: true,
        // Adds the palette items to palette
        symbols: this.getBasicShapes(),
        // Sets the header text of the palette
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic',
    }];
}
```

The following code example shows the complete locale settings for the symbol palette:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/locale/localsymbolpalette-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/locale/localsymbolpalette-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/locale/localsymbolpalette-cs1" %}

For comprehensive information about localization implementation across all Syncfusion components, refer to the [`localization`](https://ej2.syncfusion.com/angular/documentation/common/localization) documentation.