import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss']
})

export class Tab3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

const skills = [
  'photoshop', 'illustrator',
  'html', 'xml', 'css', 'javascript', 'php', 'typescript',
  'c', 'cpp', 'python',
  'sql', 'mongodb', 'firebase',
  'nodejs', 'react', 'angular', 'nextjs', 'jquery', 'webpack-babel',
  'pug', 'less', 'sass',
  'tkinter', 'matplotlib', 'udp',
  'sfml',
  'polish', 'english', 'german', 'russian'
];

export {skills};
