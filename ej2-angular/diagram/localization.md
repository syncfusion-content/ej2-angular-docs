---
layout: post
title: Localization in Angular Diagram | Syncfusion®
description: Adapt the Angular Diagram context menu and symbol palette search to specific cultures by setting the locale property and loading translated text via L10n.load.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in Angular Diagram

The EJ2 Angular Diagram component supports localization functionality, allowing developers to adapt the user interface to different languages and regions. The diagram's symbol palette search box and context menu items can be localized based on the selected culture. Use the locale property of the diagram to specify the desired culture for localization.

## Localize Diagram context menu

Before localizing the diagram, import `setCulture` and `L10n` from `@syncfusion/ej2-base`; ensure the package is installed.

To localize the diagram context menu, define the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/diagram#locale) property of the diagram with the preferred culture. The example below demonstrates localization using 'de-DE', the locale code for German as used in Germany.

```
import { Component, ViewChild, OnInit } from '@angular/core';
import { DiagramModule, DiagramComponent, DiagramContextMenuService } from '@syncfusion/ej2-angular-diagrams';
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
    public diagram: DiagramComponent;
    public locale: string = 'de-DE';
    public contextMenuSettings: ContextMenuSettingsModel = {
        show: true
    };

    ngOnInit(): void {
        // Component initialization logic here
    }
}
```

The L10n key name must match the component's internal key (`diagram` for the diagram, `SymbolPalette` for the symbol palette). `setCulture` and `L10n.load` are typically called in `main.ts` or the root component's `ngOnInit` before the diagram renders.

Then register the default culture and load the translated strings. The `setCulture('de')` function accepts one parameter, `cultureName`, which specifies the culture name to be set as the default.

```

// Set the default culture to German
setCulture('de')

// Load locale text for the diagram context menu
L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Ausschneiden',
      Copy: 'Kopieren',
      Paste: 'Einfügen',
      Undo: 'Rückgängig',
      Redo: 'Wiederherstellen',
      SelectAll: 'Alle auswählen',
      Grouping: 'Gruppierung',
      Group: 'Gruppe',
      Ungroup: 'Gruppierung aufheben',
      Order: 'Reihenfolge',
      BringToFront: 'In den Vordergrund',
      MoveForward: 'Nach vorne',
      SendToBack: 'In den Hintergrund',
      SendBackward: 'Nach hinten',
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

Enable the search functionality in the symbol palette using the [`enableSearch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel#enablesearch) property.

To localize the symbol palette search box, define the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel#locale) property of the symbol palette with the preferred culture. The example below uses 'de-DE' for German localization.

The following code demonstrates symbol palette localization; `setCulture` and `L10n.load` need only be called once globally, as they apply to all EJ2 components in the app:

```
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

// excerpt from AppComponent
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

// Declarations for expandMode, palettes, and getBasicShapes() are omitted for brevity.
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

For comprehensive information about localization implementation across all Syncfusion components, refer to the [`localization`](https://ej2.syncfusion.com/angular/documentation/common/globalization/localization) documentation.