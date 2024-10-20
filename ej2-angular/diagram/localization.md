---
layout: post
title: Localization in Angular Diagram component | Syncfusion
description: Learn here all about Connectors in Syncfusion Angular Diagram component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Localization 
documentation: ug
domainurl: ##DomainURL##
---

# Localization in EJ2 Angular Diagram control

The EJ2 Diagram component supports `localization`. In the Diagram component, the symbol palette search box and context menu items can be localized based on the selected culture. By using the locale property of the diagram, you can change the culture.

## Localize Diagram context menu

To localize the diagram context menu, we need to define the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/diagram/#locale) property of the diagram with our preferred culture. In the example below, we use **'de-DE**', which is the locale code for German as used in Germany.

```typescript
import { DiagramModule, DiagramContextMenuService } from '@syncfusion/ej2-angular-diagrams'
import {Diagram,DiagramContextMenu } from '@syncfusion/ej2-diagrams';
import { ContextMenuSettingsModel, Diagram } from '@syncfusion/ej2-diagrams';

Diagram.Inject(DiagramContextMenu);
@Component({
  providers: [DiagramContextMenuService],
  standalone: true,
  selector: 'app-container',
  template: `<ejs-diagram id="diagram" width="100%" height="580px"  [contextMenuSettings]="contextMenuSettings"></ejs-diagram>`,
})

export class AppComponent {
    @ViewChild("diagram")
    public contextMenuSettings?: ContextMenuSettingsModel
    ngOnInit(): void {
      locale: 'de-DE', // Set locale
      contextMenuSettings: {
        show: true, // Enable context menu
      },   
    }
}

```

Next, we need to call the `setCulture('de')` function, which sets the default culture for all EJ2 components. This method takes one parameter, cultureName, which specifies the culture name to be set as the default.

We also need to define the text we want to render in the context menu instead of the default English, as shown below.

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

The following code example summarizes the locale settings for the context menu.

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

You can enable the search option in the symbol palette to search for symbols by using the [`enableSearch`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#enablesearch) option. This search box can also be localized.

To localize the symbol palette search box, we need to define the [`locale`](https://ej2.syncfusion.com/angular/documentation/api/diagram/symbolPaletteModel/#locale) property of the symbol palette with our preferred culture. In the example below, we use **'de-DE**', which is the locale code for German as used in Germany.

The following code shows how to localize symbol palette.

```typescript
// Set the default culture to German
setCulture('de')

// Load locale text for the SearchShapes
L10n.load({
        'de-DE': {
            SymbolPalette: {
                'SearchShapes':'Formen suchen',
            }
        }
    });

 // Initializes symbol palette.
     ngOnInit(): void {
        this.expandMode = 'Multiple',
            this.palettes = [{
                //Sets the id of the palette
                id: 'basic',
                //Sets whether the palette expands/collapse its children
                expanded: true,
                //Adds the palette items to palette
                symbols: this.getBasicShapes(),
                //Sets the header text of the palette
                title: 'Basic Shapes',
                iconCss: 'e-ddb-icons e-basic',
                //Sets the locale
            },]
    }
```

The following code example summarizes the locale settings for the symbol palette.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram/locale/localsymbolpalette-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram/locale/localsymbolpalette-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/diagram/locale/localsymbolpalette-cs1" %}

Refer [`localization`](https://ej2.syncfusion.com/angular/documentation/common/localization) for more information.