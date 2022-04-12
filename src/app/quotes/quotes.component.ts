import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote []=[
    new Quote(1,"Inspiration:","The greatest glory in living lies not in never falling, but in rising every time we fall.",0,0),
    new Quote(2,"Business:","The way to get started is to quit talking and begin doing.",0,0),
    new Quote(3,"Positivity:","When things go wrong, don't go with them",0,0),
  ];
    
  
    

  constructor() { }

  ngOnInit(): void {

  }

}
