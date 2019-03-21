import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides = [
    {
      image: '../../../assets/logo.jpg',
      description: 'First slide'
    },
    {
      image: '../../../assets/logo.jpg',
      description: 'Second slide'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
