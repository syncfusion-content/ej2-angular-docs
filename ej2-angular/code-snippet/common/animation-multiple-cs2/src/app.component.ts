


import { Component, ViewChild } from '@angular/core';
import { Animation } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: `
    <div #element1 class='animation1'></div>
    <div #element2 class='animation2'></div>
    `
})

export class AppComponent {
  @ViewChild('element1',{static: false})element1: any;
  @ViewChild('element2',{static: false})element2: any;

  ngAfterViewInit() {
    let animation: Animation = new Animation({ duration: 5000 });
    animation.animate(this.element1.nativeElement, { name: 'FadeOut' });
    animation.animate(this.element2.nativeElement, { name: 'ZoomOut' });
  }
}


