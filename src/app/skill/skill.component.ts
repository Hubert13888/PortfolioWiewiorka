import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {
  @Input() skillName: string;
  @Input() imgName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
