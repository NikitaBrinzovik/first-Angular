import {Component, Input, OnInit} from '@angular/core'
import {MyCard} from "../app.component";


@Component({
  selector: 'app-another-card',
  templateUrl: './another-card.component.html',
  styleUrls: ['another-card.component.scss'],
  interpolation: ['{{', '}}'],
})

export class AnotherCardComponent implements OnInit{
  @Input() card: MyCard = {title:'', text: ''}
  @Input() index: number = 14

  title: string = 'My Another Card'
  number: number = 88
  text: string  ='We must secure the existence of our people and a future for human children'
  textColor: string = 'lime'
  ngOnInit() {}

  changeTitle() {
    this.card.title = 'Do U remember?'
  }

  inputHandle(event: any) {
    this.card.title = event.target.value
  }
  secondInputHandle(value: string) {
    this.card.title = value
  }
  changeHandleByModel(){
    console.log(this.card.title)
  }


}
