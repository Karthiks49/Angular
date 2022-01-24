import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
    // let header = document.getElementsByClassName("header-options-container")[0];
    // header.addEventListener("click", function(event) {
    //   for (let i = 0; i < header.classList.length; i++) {
    //     if ((event.target.id == i) {
    //     header.classList.remove("header-option");
    //     header.classList.add("header-option-focused");
        
    //     }
    //   }
    // });

    let counter = 1;
    setInterval(function () {
      var element = <HTMLInputElement>document.getElementById('radio' + counter);
      element.checked = true;
      counter++;
      if (counter > 5) {
        counter = 1;
      }
    }, 9000);
  }

}
