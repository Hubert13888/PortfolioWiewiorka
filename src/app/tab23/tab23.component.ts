import { Component, OnInit } from '@angular/core';
import picMap from '../../assets/sliderPicMap.json';

@Component({
  selector: 'app-tab23',
  templateUrl: '../projects.html',
  styleUrls: ['./tab23.component.scss', '../projects.scss']
})
export class Tab23Component implements OnInit {

  public type = 'large';
  public urls = {
    theSquirrelDragon: ['https://github.com/Hubert13888/TSD-some-components'],
    blackrats_second: ['https://bitbucket.org/unexpectedsyntaxerror/blackrats/src/master/'],
    wspoldzielnia: [],
    Blackrats_first: ['https://github.com/Hubert13888/BlackratsSymfony']
  }; 
  public projects = [
    'theSquirrelDragon',
    'blackrats_second',
    'wspoldzielnia',
    'Blackrats_first'
  ];
  public picMap = picMap;

  constructor() { }

  ngOnInit(): void {
  }

}
