import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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
  'html', 'css', 'javascript', 'php', 'typescript',
  'cpp', 'python',
  'sql', 'mongodb', 'firebase',
  'nodejs', 'react', 'angular', 'nextjs', 'jquery',
  'pug', 'less', 'sass',
  'sfml',
  'symfony',
  'flstudio', 'audacity',
  'sonyvegas', 'hitfilm',
  'word', 'excel', 'access', 'powerpoint', 'outlook',
  'polish', 'english', 'german', 'russian'
];

export {skills};
