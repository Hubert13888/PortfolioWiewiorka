import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab21',
  templateUrl: '../projects.html',
  styleUrls: ['./tab21.component.scss', '../projects.scss']
})
export class Tab21Component implements OnInit {

  public type = 'small';
  public urls = {
    UDP_Python: ['https://github.com/Hubert13888/UDP_Python'],
    chat: ['https://github.com/Hubert13888/czat'],
    checkers: ['https://github.com/Hubert13888/warcaby'],
    microscope: ['https://github.com/Hubert13888/Mikroskop']
  };
  public projects = [
    'UDP_Python',
    'chat',
    'checkers',
    'microscope'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
