import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  name="cars";
  person={name:"angie",age:23,car:"prado"}

  machines=["probox","olwenda","canter","suzuki"]
  isRich=true;

  constructor() { }

  ngOnInit(): void {
  }

}
