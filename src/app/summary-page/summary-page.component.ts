import { Component, OnInit } from '@angular/core';
import myData from '../../data/data.json';


export interface Card  {

  "type": string;
  "count": number;
}
export interface Data {

  "type": string

      "_id": string;

      "amount": string;

      "name": { 
        "first": string;

        "last": string;

      },

      "company": string;

      "email": string;

      "phone": string;

      "address": string;
}

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})



export class SummaryPageComponent implements OnInit {



  constructor(){
    
  }
  
  data: Data[] = myData.data;

  cards: Card[] = [
   {
     "type" : "Income",
     "count" : 0,
   },
   {
     "type" : "Outcome",
     "count" : 0,
   },
   {
     "type" : "Loans",
     "count" : 0,
   },
   {
     "type" : "Investments",
     "count" : 0,
   },

  ]

  public routerLinkVariable = `/navigator?tab=`; 


  ngOnInit(): void {
    this.countTypes(this.data)
  
  }

  countTypes(data: Data[]) {
    data.forEach(element => {
      switch (element.type) {
        case "income":
          this.cards[0].count++;
          break;
        case "outcome":
          this.cards[1].count++;
          break;
        case "loan":
          this.cards[2].count++;
          break;
        case "investment":
          this.cards[3].count++;
        break;
        default:
          break;
      }
    });
  }


}
