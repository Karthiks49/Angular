import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

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
