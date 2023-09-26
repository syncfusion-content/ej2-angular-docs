
import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id="toast_target"></div>
        <div id='sample_container'>
        <div id='container'>

        <div class='row' style="margin: 10px">
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <label> Show Animation </label>
          </div>
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
           <ejs-dropdownlist #dropDownShow (change)="showAnimationChange($event)" id='games' [dataSource]='AnimationShowDB' index='0'>
            </ejs-dropdownlist>
          </div>
        </div>
          <div class='row'  style="margin: 10px">
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
            <label> Hide Animation </label>
          </div>
          <div class="col-xs-6 col-sm-6 col-lg-6 col-md-6">
           <ejs-dropdownlist #dropDownHide (change)="hideAnimationChange($event)" id='games'  [dataSource]='AnimationHideDB' index='0'>
            </ejs-dropdownlist>
          </div>
          <div class='row'  style="margin: 10px">
        <button ejs-button [isPrimary]="true" (click)="btnClick($event)">Show Toast</button>
        </div>
        </div></div>
        <ejs-toast #element (created)="onCreate($event)" [position] = 'position' [animation] = 'animation' >
              <ng-template #title>
                  <div>Matt sent you a friend request</div>
              </ng-template>
              <ng-template #content>
                  <div>Hey, wanna dress up as wizards and ride our hoverboards?</div>
              </ng-template>
    </ejs-toast>
        `
})

export class AppComponent {
    @ViewChild('element') public toastObj: any;
    @ViewChild('dropDownShow') public dropShow: any;
    @ViewChild('dropDownHide') public drophide: any;
    public position = { X: 'Right', Y : 'Bottom' };
    public animation = { show: { effect: 'SlideRightIn' }, hide: { effect: 'SlideLeftOut' }
};
    public AnimationShowDB = ['FadeIn', 'FadeZoomIn', 'FadeZoomOut', 'FlipLeftDownIn', 'FlipLeftDownOut', 'FlipLeftUpIn', 'FlipLeftUpOut', 'FlipRightDownIn', 'FlipRightDownOut', 'SlideBottomIn', 'SlideBottomOut', 'ZoomIn', 'ZoomOut'];
    public AnimationHideDB = ['Fadeout', 'FadeZoomIn', 'FadeZoomOut', 'FlipLeftDownIn', 'FlipLeftDownOut', 'FlipLeftUpIn', 'FlipLeftUpOut', 'FlipRightDownIn', 'FlipRightDownOut', 'SlideBottomIn', 'SlideBottomOut', 'ZoomIn', 'ZoomOut'];

    onCreate(args: any) {
      this.toastShow();
    }
    btnClick(args: any) {
      this.toastShow();
    }

    showAnimationChange(e: any) {
      this.toastObj.animation.show.effect = this.dropShow.value;
    }

    hideAnimationChange(e: any) {
      this.toastObj.animation.hide.effect = this.drophide.value;
    }

    toastShow() {
          setTimeout(
        () => {
            this.toastObj.show();
        }, 700);
    }
}



