import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {skills} from '../tab3/tab3.component';
import picMap from '../../assets/sliderPicMap.json';

@Component({
  selector: 'app-tab31',
  templateUrl: './tab31.component.html',
  styleUrls: ['./tab31.component.scss', '../projects.scss']
})
export class Tab31Component implements OnInit, OnDestroy {
  private sub: any;
  public item: string;
  public loadSite: boolean = true;
  public picMap = picMap;
  skills = {
    flstudio: ['https://drive.google.com/drive/folders/1PZMZfpAiW4CjeZUVKL-VkhsPUkEONnnA?usp=sharing']
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.item = params.item;
      let isItem = false;
      skills.map(skill => this.item === skill ? isItem = true : void(0));
      if(!isItem) {
        alert('Niestety zakładka ta nie jest jeszcze dostępna :/');
        location.href = '/skills';
        this.loadSite = false;
      }
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
