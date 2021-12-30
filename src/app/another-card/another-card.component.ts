import {Component, OnInit} from '@angular/core'


@Component({
  selector: 'app-another-card',
  templateUrl: './another-card.component.html',
  styleUrls: ['another-card.component.scss'],
  interpolation: ['{{', '}}'],
})

export class AnotherCardComponent implements OnInit{
  title: string = 'My Another Card'
  number: number = 88
  text: string  ='We must secure the existence of our people and a future for human children'
  textColor: string = 'lime'
  ngOnInit() {
  }

  changeTitle() {
    this.title = 'Do U remember?'
  }

  inputHandle(event: any) {
    const value = event.target.value
    this.title = value
  }
  secondInputHandle(value: string) {
    this.title = value
  }
  changeHandleByModel(){
    console.log(this.title)
  }
}
