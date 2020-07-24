import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab22',
  templateUrl: '../projects.html',
  styleUrls: ['./tab22.component.scss', '../projects.scss']
})
export class Tab22Component implements OnInit {

  public type = 'medium';
  public urls = {
    theImpossibleGame: ['https://github.com/Hubert13888/TheImpossibleGame'],
    nextjsTemplates: [
      'https://bitbucket.org/Hubert138881/nextjs-template-simple/src/master/',
      'https://bitbucket.org/Hubert138881/nextjs-template-advanced/src/master/'
    ],
    OS_Symulator: ['https://github.com/Hubert13888/ProjektNaSO'],
    Hamownia_drogowa: ['https://github.com/PUT-PTM-2020/P45/tree/master/Aplikacja_Python']
  };
  public projects = [
    'theImpossibleGame',
    'nextjsTemplates',
    'OS_Symulator',
    'assembler',
    'Hamownia_drogowa'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
