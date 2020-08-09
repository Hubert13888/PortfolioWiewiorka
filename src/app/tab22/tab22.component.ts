import { Component, OnInit } from '@angular/core';
import picMap from '../../assets/sliderPicMap.json';

@Component({
  selector: 'app-tab22',
  templateUrl: '../projects.html',
  styleUrls: ['./tab22.component.scss', '../projects.scss']
})
export class Tab22Component implements OnInit {

  public type = 'medium';
  public urls = {
    theImpossibleGame: ['https://github.com/Hubert13888/TheImpossibleGame',
                        'https://drive.google.com/file/d/11n1boJ1gZx6BumzlbsrL49Y8hjFGNif_/view?usp=sharing'
                      ],
    nextjsTemplates: [
      'https://bitbucket.org/Hubert138881/nextjs-template-simple/src/master/',
      'https://bitbucket.org/Hubert138881/nextjs-template-advanced/src/master/'
    ],
    portfolioWiewiorka: [
      'https://github.com/Hubert13888/PortfolioWiewiorka'
    ],
    OS_Symulator: ['https://github.com/Hubert13888/ProjektNaSO'],
    Hamownia_drogowa: ['https://github.com/PUT-PTM-2020/P45/tree/master/Aplikacja_Python']
  };
  public projects = [
    'theImpossibleGame',
    'nextjsTemplates',
    'portfolioWiewiorka',
    'OS_Symulator',
    'assembler',
    'Hamownia_drogowa'
  ];
  public picMap = picMap;

  constructor() { }

  ngOnInit(): void {
  }

}
