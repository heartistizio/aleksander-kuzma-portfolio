import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolioItems = [
    {
      image: '../../../assets/logo.jpg',
      label: 'Project I',
      description: 'Project consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      image: '../../../assets/logo.jpg',
      label: 'Project II',
      description: 'Project consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
    {
      image: '../../../assets/logo.jpg',
      label: 'Project III',
      description: 'Project consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
