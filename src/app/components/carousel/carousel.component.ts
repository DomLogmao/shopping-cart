import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [
    {path: 'assets/images/products/coffee-jelly.png'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
