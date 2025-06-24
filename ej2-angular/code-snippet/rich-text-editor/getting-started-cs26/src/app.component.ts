import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { Component } from '@angular/core';
import {
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
} from '@syncfusion/ej2-angular-richtexteditor';

@Component({
  imports: [RichTextEditorAllModule],
  standalone: true,
  selector: 'app-root',
  template: `<ejs-richtexteditor id='defaultRTE' [toolbarSettings]='tools' [backgroundColor]='bgColor' [fontColor] ='fontColor'>
              </ejs-richtexteditor>`,
  providers: [ToolbarService, LinkService, ImageService, HtmlEditorService],
})

export class AppComponent {
  public tools: object = {
    items: ['FontColor', 'BackgroundColor'],
  };
  
  public bgColor = {
    default: '#00ffff',
    columns: 5,
    colorCode: {
      Custom: [
        '#ffff00',
        '#00ff00',
        '#00ffff',
        '#ff00ff',
        '#0000ff',
        '#ff0000',
        '#000080',
        '#008080',
        '#008000',
        '#800080',
        '#800000',
        '#808000',
        '#c0c0c0',
        '#000000',
        '',
      ],
    },
    modeSwitcher: true,
  };
  
  public fontColor = {
    default: '#c0c0c0',
    columns: 2,
    colorCode: {
      Custom: [
        '#ffff00',
        '#008000',
        '#800080',
        '#800000',
        '#808000',
        '#c0c0c0',
        '#000000',
        '',
      ],
    },
    modeSwitcher: true,
  };
}