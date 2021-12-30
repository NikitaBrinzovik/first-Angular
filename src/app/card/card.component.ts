import {Component, OnInit} from '@angular/core'

const ANGULAR_LOGO = 'https://vanntechs.com/wp-content/uploads/2020/02/the-seo-guide-to-angular-760x400-1.png';
const REACT_LOGO = 'https://res.cloudinary.com/practicaldev/image/fetch/s--54ca_F2q--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/1wwdyw5de8avrdkgtz5n.png';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['card.component.scss'],
  interpolation: ['{{', '}}'],
})

/*@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <h2>card component</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, unde.</p>
    </div>
  `,
  styles: [`
    .card {
      padding: .5rem 1rem;
      border: 1px dashed #ccc;
      margin-bottom: 1rem;
    }
    h2 {
      margin-bottom: .5rem;
    }
  `]
})*/

export class CardComponent implements OnInit{
  title: string = 'My Card Title'
  number: number = 666
  text: string  ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, unde.'
  imgUrl: string  = ANGULAR_LOGO
  array: number[] = [1, 2, 3, 4,]
  obj  = {
    name: 'Nik',
    info: {
      age: 30,
      'n-on': 'rus'
    }
  }
  disabled = false

  ngOnInit() {
    console.log('ngOnInit')
    setInterval(() => {
      if(this.imgUrl === REACT_LOGO){
        this.imgUrl = ANGULAR_LOGO
        this.disabled = false
      } else {
        this.imgUrl = REACT_LOGO
        this.disabled = true
      }
    }, 3000)
  }

  getInfo():string {
    return 'This is info'
  }

}
