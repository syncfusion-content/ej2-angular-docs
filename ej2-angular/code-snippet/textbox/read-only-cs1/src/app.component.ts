

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
                      <div class="e-float-input">
                        <input class="e-input myField" id="myText" name="readonlyAttr"  type="text" readOnly>
                        <span class="e-float-line"></span>
                        <label class="e-float-text">Enter value</label>
                      </div>
                    </div>
                </div>
                <div class="row">
                  <div class="col-xs-10 col-sm-10 col-lg-10 col-md-10">
                      <button ejs-button class="e-btn update_value" id='valuebtn' >Set value</button>
                      <button ejs-button class="e-btn remove_value" id='removebtn' >Remove value</button>
                    </div>
                </div>
              </div>`
})

export class AppComponent {
  ngAfterViewInit(): void {
    (document.getElementById('valuebtn') as HTMLElement).onclick = () => {
      ((document.getElementsByClassName('myField')[0]) as any).value = '10';
      checkFloatingLabel('myText')
    }
    (document.getElementById('removebtn') as HTMLElement).addEventListener('click', function() {
      ((document.getElementsByClassName('myField')[0]) as any).value = '';
      checkFloatingLabel('myText')
    })
  }
}
function checkFloatingLabel(id: any): void {
  let inputElement: HTMLElement | any =  document.getElementById(id) as HTMLElement;
  let labelElement: Element = (inputElement.parentElement as HTMLElement).querySelector('.e-float-text') as Element;
  if (inputElement.value !== '') {
      labelElement.classList.remove('e-label-bottom');
      labelElement.classList.add('e-label-top');
  } else {
    labelElement.classList.remove('e-label-top');
    labelElement.classList.add('e-label-bottom');
  }
  let inputField = document.getElementById('myText');
}



