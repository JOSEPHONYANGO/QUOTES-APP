import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  author:string=''
  title:string=''
  quote: any;
  @Output() addQuote = new EventEmitter<Quote>();
  submitQuote() {
    this.addQuote.emit(this.newQuote)
    
  }
  newQuote = new Quote(0, "","",0,0,new Date());

  constructor() { }

  ngOnInit(): void {
  }

}
