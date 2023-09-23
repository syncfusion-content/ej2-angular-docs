


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    ` <ejs-circulargauge style='display:block;' [title]='title' centerY='57%' [titleStyle]='titleStyle'>
            <e-axes>
                <e-axis [lineStyle]='lineStyle' radius='90%' startAngle=200 endAngle=130 minimum=0 maximum=14 [labelStyle]='labelStyle' [majorTicks]='majorTicks'
                    [minorTicks]='minorTicks' [ranges]='ranges'>
                    <e-pointers>
                        <e-pointer type='Marker' [value]=12 markerShape='Image' imageUrl='templates/circulargauge/images/football.png' radius='108%'
                            [markerWidth]=28 [markerHeight]=28 [animation]='animation1'>
                        </e-pointer>
                        <e-pointer type='Marker' [value]=11 markerShape='Image' imageUrl='templates/circulargauge/images/basketball.png' radius='78%'
                            [markerWidth]=28 [markerHeight]=28 [animation]='animation2'>
                        </e-pointer>
                        <e-pointer type='Marker' [value]=10 markerShape='Image' imageUrl='templates/circulargauge/images/golfball.png' radius='48%'
                            [markerWidth]=28 [markerHeight]=28 [animation]='animation3'>
                        </e-pointer>
                        <e-pointer type='Marker' [value]=12 markerShape='Image' imageUrl='templates/circulargauge/images/athletics.png' radius='0%'
                            [markerWidth]=90 [markerHeight]=90 [animation]='animation4'>
                        </e-pointer>
                        <e-pointer type='Marker' [value]=0.1 markerShape='Image' imageUrl='templates/circulargauge/images/girl1.png' radius='108%'
                            [markerWidth]=28 [markerHeight]=28 [animation]='animation1'>
                        </e-pointer>
                        <e-pointer type='Marker' [value]=0.1 markerShape='Image' imageUrl='templates/circulargauge/images/man1.png' radius='78%' [markerWidth]=28
                            [markerHeight]=28 [animation]='animation1'>
                        </e-pointer>
                        <e-pointer type='Marker' [value]=0.1 markerShape='Image' imageUrl='templates/circulargauge/images/man2.png' radius='48%' [markerWidth]=28
                            [markerHeight]=28 [animation]='animation1'>
                        </e-pointer>
                    </e-pointers>
                    <e-annotations>
                        <e-annotation content='12 M' radius='108%' angle=98 zIndex='1'> </e-annotation>
                        <e-annotation content='11 M' radius='80%' angle=81 zIndex='1'> </e-annotation>
                        <e-annotation content='10 M' radius='50%' angle=69 zIndex='1'> </e-annotation>
                        <e-annotation content='Doe' radius='108%' angle=190 zIndex='1'> </e-annotation>
                        <e-annotation content='Almaida' radius='80%' angle=185 zIndex='1'> </e-annotation>
                        <e-annotation content='John' radius='50%' angle=180 zIndex='1'> </e-annotation>
                    </e-annotations>
                </e-axis>
            </e-axes>
        </ejs-circulargauge>
`
})
export class AppComponent implements OnInit {
    public ranges?: Object[];
    public titleStyle?: Object;
    public title?: string;
    public animation1?: Object;
    public animation2?: Object;
    public animation3?: Object;
    public animation4?: Object;
    public lineStyle?: Object;
    public labelStyle?: Object;
    public majorTicks?: Object;
    public minorTicks?: Object;
    public rangeLinearGradient: Object = {
        startValue: '0%', endValue: '100%',
        colorStop: [
            { color: '#9E40DC', offset: '0%', opacity: 0.9 },
            { color: '#E63B86', offset: '70%', opacity: 0.9 }]
    };
    ngOnInit(): void {
        // Initialize objects.
        this.ranges = [{
            start: 0, end: 12, radius: '115%',
            startWidth: 25, endWidth: 25,
            linearGradient : this.rangeLinearGradient
        }, {
            start: 0, end: 11, radius: '85%',
            startWidth: 25, endWidth: 25,
            linearGradient : this.rangeLinearGradient
        }, {
            start: 0, end: 10, radius: '55%',
            startWidth: 25, endWidth: 25,
            linearGradient : this.rangeLinearGradient
        }];
        this.titleStyle = { size: '18px' };
        this.title = 'Short Put Distance';
        this.animation1 = { duration: 1500 };
        this.animation2 = { duration: 1200 };
        this.animation3 = { duration: 900 };
        this.animation4 = { duration: 0 };
        this.lineStyle = { width: 0 };
        this.labelStyle = { font: { size: '0px' } };
        this.majorTicks = { width: 0 };
        this.minorTicks = { width: 0 };
    }
}



