import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  scrollToDesc(): void {
    const element = document.querySelector("#desc")
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
