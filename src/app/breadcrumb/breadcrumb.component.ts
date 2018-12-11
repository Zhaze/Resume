import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  page = 'Home';
  constructor(private router: Router) {
    router.events.subscribe(() => {
      if (router.url == '/') {
        this.page = 'Home';
      } else {
        this.page = router.url;
      }
    });
  }
  ngOnInit() {

  }

}
