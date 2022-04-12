import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  quote: any;
  @Output() addQuote = new EventEmitter<Quote>();
  submitQuote() {
    this.addQuote.emit(this.newQuote)
  }
  newQuote = new Quote(0, "", "",0,0);


  
  

  constructor() { }

  ngOnInit(): void {
  }

}
