


import { Component } from '@angular/core';
@Component({
    selector: 'app-container',
    templateUrl: 'template.html',
   
})

export class AppComponent  {
    public data?: { [key: string]: Object }[];
    ngOnInit():void{
            this.data = [
                { text: 'JavaScript', pic: 'javascript', description: 'It is a lightweight interpreted or JIT-compiled programming language.' },
                { text: 'TypeScript', pic: 'typeScript', description: 'It is a typed superset of Javascript that compiles to plain JavaScript.' },
                { text: 'Angular', pic: 'angular', description: 'It is a TypeScript-based open-source web application framework.' },
                { text: 'React', pic: 'react', description: 'A JavaScript library for building user interfaces. It can also render on the server using Node.' },
                { text: 'Vue', pic: 'vue', description: 'A progressive framework for building user interfaces. it is incrementally adoptable.' }
            ];

    }

}