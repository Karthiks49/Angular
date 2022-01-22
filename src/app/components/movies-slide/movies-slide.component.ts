import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-slide',
  templateUrl: './movies-slide.component.html',
  styleUrls: ['./movies-slide.component.scss']
})
export class MoviesSlideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let nowShowing = document.getElementById("nowShowing");
    nowShowing?.classList.add("active");
    let comingSoon  = document.getElementById("comingSoon");
    comingSoon?.addEventListener("click", function() {
      nowShowing?.classList.remove("active");
      comingSoon?.classList.add("active");
    });
    nowShowing?.addEventListener("click", function() {
      comingSoon?.classList.remove("active");
      nowShowing?.classList.add("active");
    });
  }

}

