


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis startAngle=270 endAngle=90 [lineStyle]="lineStyle" [labelStyle]="labelStyle" [majorTicks]="majorTicks" [minorTicks]="minorTicks"
			radius='90%' minimum=0 maximum=100>
                <e-pointers>
                    <e-pointer value=70 radius="80%" pointerWidth=2 color='green' [needleStartWidth]="needleStartWidth" [needleEndWidth]="needleEndWidth" [cap]="cap" [needleTail]="needleTail" [animation]="animation"></e-pointer>
                </e-pointers>
				<e-annotations>
                    <e-annotation angle=180 radius="20%" zIndex=1>
						<ng-template #content>
							<div>
								<div style="color:#757575; font-family:Roboto; font-size:14px;padding-top: 26px">Customized Needle</div>
                            </div>
                        </ng-template>
                    </e-annotation>
                </e-annotations>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public cap?: Object;
    public needleTail?: Object;
	public animation?: Object;
    public labelStyle?: Object;
	public lineStyle?: Object;
	public majorTicks?: Object;
	public minorTicks?: Object;
	public needleStartWidth?: Number;
	public needleEndWidth?: Number;
    ngOnInit(): void {
        // Initialize objects
		this.needleStartWidth = 4;
		this.needleEndWidth = 4;
		this.animation = {
			enable: true , duration: 1000
		};
        this.cap= {
            radius: 8,
            color: 'green'
        };
        this.needleTail= {
            length: '0%'
        };
		this.labelStyle= {
            position: 'Outside',
            font:{
			   size: '0px', color: '#1E7145'
			}
        };
		this.lineStyle= {
            width: 3, color: '#1E7145'
        };
		this.majorTicks = {
			width: 1,
            height: 0,
            interval: 100
		};
		this.minorTicks = {
			height: 0,
            width: 0
		};
    }
}



