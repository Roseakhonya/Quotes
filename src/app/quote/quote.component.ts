import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote[] = [
    new Quote(1,'If you cannot handle me at my worst, you do not deserve me at my best', 'Marilyn Monroe' ,new Date(1997,2,24)),
    new Quote(2,'A room without books is like a body without a soul.',' Marcus Tullius Cicero',new Date(2001,11,25)),
    new Quote(3,'You know you are in love when you cannot fall asleep because reality is finally better than your dreams','Dr. Seuss',new Date(1982,4,25)),
    new Quote(4,'You only live once, but if you do it right, once is enough','Mae West',new Date(2018,2,2)),
    new Quote(5,'The journey to heaven begins in hell','Sam Tomashi',new Date(2019,10,10)),
    new Quote(6,'No one can make you feel inferior without your consent','Eleanor Roosevelt',new Date(2007,12,4)),
  ];
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  @Input() quotes: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }
  constructor() { }
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  ngOnInit() {
  }

}
