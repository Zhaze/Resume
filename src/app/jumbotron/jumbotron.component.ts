import { Component, OnInit } from '@angular/core';
import { IMAGES } from '../carousel-images'

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
  images = IMAGES;
  constructor() {
    
  }

  ngOnInit() {
  }

}
