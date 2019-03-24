import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-element',
  templateUrl: './portfolio-element.component.html',
  styleUrls: ['./portfolio-element.component.scss']
})
export class PortfolioElementComponent implements OnInit {
  @Input() portfolioItem;
  constructor() { }

  ngOnInit() {
  }

}
