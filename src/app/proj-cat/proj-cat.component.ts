import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proj-cat',
  templateUrl: './proj-cat.component.html',
  styleUrls: ['./proj-cat.component.scss']
})
export class ProjCatComponent implements OnInit {

  @Input() cat: string;
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
