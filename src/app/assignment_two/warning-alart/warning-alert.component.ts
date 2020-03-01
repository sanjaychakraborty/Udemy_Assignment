import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    template: `
     <p>This is Warning Message ! You have reached your Data limit.</p>
    `,
    styles: [`
       p {color :red}
    `]
})

export class WarningAlertComponent {

}
