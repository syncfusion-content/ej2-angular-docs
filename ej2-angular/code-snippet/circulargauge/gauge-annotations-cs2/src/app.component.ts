


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value = 50></e-pointer>
                </e-pointers>
                <e-annotations>
                    <e-annotation angle=90 radius="150%">
						<ng-template #content>
							<div>
								<div><span>Pointer Value : 50</span>
                                </div>
                            </div>
                        </ng-template>
                    </e-annotation>
                </e-annotations>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        // Initialize objects
    }
}



