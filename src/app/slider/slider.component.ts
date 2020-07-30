import { Component, OnInit, Input } from '@angular/core';
import picMap from '../../assets/sliderPicMap.json';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})

export class SliderComponent implements OnInit {
  @Input() key: string;
  public base: string;
  public pictureRoutes: any;
  public currentIndex: number;

  constructor() {
    this.base = 'assets/slider_images/';
    this.currentIndex = 0;
    this.pictureRoutes = picMap;
  }

  ngOnInit(): void {
  }


  change_picture(mode: boolean) {
    if (mode) {
      if (this.currentIndex + 1 >= this.pictureRoutes[this.key].length) {
        this.currentIndex = 0;
      } 
      else {
        this.currentIndex += 1;
      }
    }
    else {
      if (this.currentIndex - 1 < 0) {
        this.currentIndex = this.pictureRoutes[this.key].length - 1;
      }
      else {
        this.currentIndex -= 1;
      }
    }
  }
}
