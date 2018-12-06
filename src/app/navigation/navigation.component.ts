import { Component, OnInit } from '@angular/core';
import { INFO } from 'src/info';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  info = INFO
  isCollapsed = true

  constructor() { }

  ngOnInit() {
  }

}
