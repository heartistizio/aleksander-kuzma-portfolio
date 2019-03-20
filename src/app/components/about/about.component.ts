import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  infoTabs = [
    {
      label: 'Skills',
      bgColor: '#0288D1',
      descriptions: [
        { text: 'HTML' },
        { text: 'CSS' },
        { text: 'JS(ES6, Angular, React)' }
      ]
    },
    {
      label: 'Languages',
      descriptions: [
        { text: 'HTML' },
        { text: 'CSS' },
        { text: 'JS(ES6, Angular, React)' }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
