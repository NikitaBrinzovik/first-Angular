import { Component } from '@angular/core';

export interface MyCard {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  toggle = true;

  cards: MyCard[] = [
    {title: "Card 1", text:"This is Card 1"},
    {title: "Card 2", text:"This is Card 2"},
    {title: "Card 3", text:"This is Card 3"},
  ]

  toggleCards(){
    this.toggle = !this.toggle
  }
}
