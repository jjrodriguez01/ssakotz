import { Component, Input, OnInit } from '@angular/core';
import {Knight} from '../knight';

@Component({
  selector: 'app-knight-result',
  templateUrl: './knight-result.component.html',
  styleUrls: ['./knight-result.component.css']
})
export class KnightResultComponent implements OnInit {

  constructor() { }

  @Input() url?: string ;

  ngOnInit(): void {
  }

}
