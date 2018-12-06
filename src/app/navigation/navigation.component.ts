import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  info = {
    name: "Zachary Hazen",
    email: "ZascharyScottHazen@gmail.com",
    phone: "7204316293"
  }

  isCollapsed = true


  constructor() { }

  ngOnInit() {
  }

}
