import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  name = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe((params) => this.name = params['id']);
  }

}
