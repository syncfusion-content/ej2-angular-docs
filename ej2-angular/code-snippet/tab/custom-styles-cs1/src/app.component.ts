


import { Component } from '@angular/core';

/**
 * Customize selected tab styles
 */

@Component({
    selector: 'app-container',
    template: `<ejs-tab id="element" [items]='items'></ejs-tab>`
})
export class AppComponent {
    public items: Object[] = [
        {
            header: { 'text': '<div><div class="e-image e-andrew"></div><div class="e-title fade-in">Andrew</div></div>' },
            content: 'Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.He is fluent in French and Italian and reads German.He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.'
        },
        {
            header: { 'text': '<div><div class="e-image e-margaret"></div><div class="e-title fade-in">Margaret</div></div>' },
            content: 'Margaret holds a BA in English literature from Concordia College (1958) and an MA from the American Institute of Culinary Arts (1966).She was assigned to the London office temporarily from July through November 1992.'
        },
        {
            header: { 'text': '<div><div class="e-image e-janet"></div><div class="e-title fade-in">Janet</div></div>' },
            content: 'Janet has a BS degree in chemistry from Boston College (1984).She has also completed a certificate program in food retailing management.Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.'
        }
    ]
}



