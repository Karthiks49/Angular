import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/**
 * Gets lists of details and returns to required component. 
 * 
 * @author Karthik S
 * @version 1.0
 */
export class HeaderComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {

    let counter = 1;
    setInterval(function () {
      var element = <HTMLInputElement>document.getElementById('radio' + counter);
      element.checked = true;
      counter++;
      if (counter > 5) {
        counter = 1;
      }
    }, 5000);
  }
}
