import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-items',
  templateUrl: './quote-items.component.html',
  styleUrls: ['./quote-items.component.css']
})
export class QuoteItemsComponent implements OnInit {
  @Input() quote: any;
  @Output() onDelete = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onQuoteDelete() {
    this.onDelete.emit(this.quote.id);
  }
}
