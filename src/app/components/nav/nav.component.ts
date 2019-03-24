import { Component, OnInit } from '@angular/core';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faComment = faComment;
  faUser = faUser;
  faSuitcase = faSuitcase;

  constructor() { }

  ngOnInit() {
  }

}
