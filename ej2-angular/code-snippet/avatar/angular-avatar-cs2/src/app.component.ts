import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class='control-pane'>
        <div class="sample_container avatar-badge">
            <div class="avatar-block">
                <div class="e-card e-avatar-showcase">
                    <div class="e-card-content">
                        <div *ngFor="let item of dataSource"
                            [style.backgroundImage]="'url('+ item.src +')'"
                            class="e-avatar e-avatar-circle {{item.size}}">
                        </div>
                    </div>
                    <div class="e-card-content">
                        <div>Using <code>background-image</code> property</div>
                    </div>
                </div>
            </div>

            <div class="circleAvatar avatar-block">
                <div class="e-card e-avatar-showcase">
                    <div class="e-card-content">
                        <div *ngFor="let item of dataSource" class="e-avatar e-avatar-circle {{item.size}}">
                            <img src= {{item.src}}/>
                        </div>
                    </div>
                    <div class="e-card-content">
                        <div>Using <code>img</code> tag</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
})

export class AppComponent {
    public dataSource: { [key: string]: string }[] | any = [
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar-xsmall' },
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar-small' },
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar' },
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar-large' },
        { src: 'https://ej2.syncfusion.com/demos/src/grid/images/2.png', size: 'e-avatar-xlarge' }
    ];
}




