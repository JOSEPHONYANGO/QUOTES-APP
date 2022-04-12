import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quote []=[
    new Quote(1,"Inspiration:","Jesus is Lord",0,0),
    new Quote(2,"Inspiration:","Jesus is Lord",0,0),
    new Quote(3,"Inspiration:","Jesus is Lord",0,0),
  ];
    
  
    

  constructor() { }

  ngOnInit(): void {

  }

}
