import { Component, OnInit, Input } from '@angular/core';
import { Card, Data } from '../summary-page/summary-page.component';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  @Input() card!: Card;
  @Input() Data!: Data;

  constructor(){
  }

  ngOnInit(): void {
  }

}
