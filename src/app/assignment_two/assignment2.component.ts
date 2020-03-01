import { Component } from '@angular/core';


@Component({
 selector: 'app-assignment-two',
 templateUrl: './assignment2.component.html',
 styles: []
})

export class Assignment2Component {
  username = '';
  onButtonClick() {
      this.username = '';
   }
}
